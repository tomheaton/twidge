const Waitlist = () => {
	return (
		<div className="w-full h-full flex flex-col items-center pb-8">
			<div className="py-14">
				<h1 className="text-3xl md:text-5xl text-white font-bold max-w-[704px] text-center">
					Start using Twidge today, be a productivity wizard.
				</h1>
				<div className="p-3 flex justify-center mt-4">
					<div className="flex gap-3">
						<button
							onClick={() => {
								window.open("https://github.com/twidgeapp/twidge", "_blank");
							}}
							className="bg-blue-blue6 font-medium px-5 py-3 rounded-xl border border-blue-blue11 text-blue-blue11 font-mulish text-xl leading-6 tracking-[-5%] flex gap-2"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.9906 1.78809C6.19453 1.78574 1.5 6.47793 1.5 12.2693C1.5 16.849 4.43672 20.742 8.52656 22.1717C9.07734 22.31 8.99297 21.9186 8.99297 21.6514V19.835C5.8125 20.2076 5.68359 18.1029 5.47031 17.7514C5.03906 17.0154 4.01953 16.8279 4.32422 16.4764C5.04844 16.1037 5.78672 16.5701 6.64219 17.8334C7.26094 18.7498 8.46797 18.5951 9.07969 18.4428C9.21328 17.892 9.49922 17.3998 9.89297 17.0178C6.59766 16.4271 5.22422 14.4162 5.22422 12.0256C5.22422 10.8654 5.60625 9.79902 6.35625 8.93887C5.87812 7.5209 6.40078 6.30684 6.47109 6.12637C7.83281 6.00449 9.24844 7.10137 9.35859 7.18809C10.132 6.97949 11.0156 6.86934 12.0047 6.86934C12.9984 6.86934 13.8844 6.98418 14.6648 7.19512C14.9297 6.99356 16.2422 6.05137 17.5078 6.16621C17.5758 6.34668 18.0867 7.53262 17.6367 8.93184C18.3961 9.79434 18.7828 10.8701 18.7828 12.0326C18.7828 14.4279 17.4 16.4412 14.0953 17.0225C14.3784 17.3008 14.6031 17.6328 14.7564 17.999C14.9098 18.3652 14.9886 18.7583 14.9883 19.1553V21.792C15.007 22.0029 14.9883 22.2115 15.3398 22.2115C19.4906 20.8123 22.4789 16.8912 22.4789 12.2717C22.4789 6.47793 17.782 1.78809 11.9906 1.78809Z"
									fill="#52A9FF"
								/>
							</svg>
							Github
						</button>
						<button
							onClick={() => {
								window.open("https://www.getrevue.co/profile/twidge", "_blank");
							}}
							className="bg-purple-purple6 font-medium px-5 py-3 rounded-xl border border-purple-purple11 text-purple-purple11 font-mulish text-xl leading-6 tracking-[-5%]"
						>
							Join the waitlist
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Waitlist;