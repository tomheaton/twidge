use std::{
    io::Error,
    sync::{Arc, Mutex},
};

use axum::{routing::get, Extension, Json, Router};
use log::info;
use serde_json::{json, Value};
use tauri::Window;

type WindowState = Arc<Mutex<Option<Window>>>;
#[derive(Clone)]
struct AppState {
    window: WindowState,
}

async fn home(Extension(shared): Extension<Arc<AppState>>) -> &'static str {
    println!("Hello");
    let window = shared.window.lock().unwrap();
    // focus the window
    window.as_ref().unwrap().set_focus();

    "HELLO"
}

pub async fn setup_daemon(window: Arc<Mutex<Option<Window>>>) {
    let app_state = Arc::new(AppState { window });

    let app = Router::new()
        .route("/", get(home))
        .layer(Extension(app_state));
    info!("Starting deamon on http://localhost:42690");

    axum::Server::bind(&"0.0.0.0:42690".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
