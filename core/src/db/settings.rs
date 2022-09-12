use std::collections::HashMap;
use std::sync::Arc;

use lazy_static::lazy_static;

use crate::{
    errors::CoreError,
    prisma::{self, PrismaClient},
};

lazy_static! {
    static ref SETTINGS: HashMap<&'static str, &'static str> = {
        let mut m = HashMap::new();
        m.insert("hotkey", "ctrl+shift+space");
        m.insert("autostart", "true");
        m.insert("first_run", "true");
        m
    };
}

pub struct Settings {
    pub hotkey: String,
    pub autostart: bool,
}

impl Settings {
    pub fn from_name(settings: Vec<prisma::settings::Data>) -> Self {
        let mut f_settings = Settings {
            hotkey: "Ctrl+Shift+K".to_string(),
            autostart: true,
        };

        for setting in settings {
            if setting.name == "hotkey" {
                f_settings.hotkey = setting.value.to_string();
            } else if setting.name == "autostart" {
                f_settings.autostart = setting.value == "true";
            }
        }

        f_settings
    }

    pub async fn new(client: Arc<PrismaClient>) -> Result<Self, CoreError> {
        let settings = client.settings().find_many(vec![]).exec().await.unwrap();
        let mut async_calls = Vec::new();
        for (name, value) in SETTINGS.iter() {
            let insert = client
                .settings()
                .upsert(
                    prisma::settings::name::equals(name.to_string()),
                    (
                        (name.to_owned().to_owned()),
                        (value.to_owned().to_owned()),
                        vec![prisma::settings::SetParam::SetValue(
                            value.to_owned().to_owned(),
                        )],
                    ),
                    vec![],
                )
                .exec();

            async_calls.push(insert);
        }

        futures::future::join_all(async_calls).await;

        Ok(Settings::from_name(settings))
    }
}
