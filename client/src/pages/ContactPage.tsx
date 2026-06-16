import { EnvelopeIcon, GithubLogoIcon, HourglassHighIcon, LinkedinLogoIcon, MapPinIcon } from "@phosphor-icons/react";
import { PrimaryPanel } from "../components/Common/PrimaryPanel";
import { SocialLink } from "../components/ContactPage/SocialLink";
import { TerminalWindowPanel } from "../components/Common/TerminalWindowPanel";
import { InputField } from "../components/Common/InputField";
import { TextArea } from "../components/Common/TextArea";
import { Button } from "../components/Common/Button";

export const ContactPage = () => {
	return (
		<div className="flex flex-col gap-6 sm:gap-10 min-h-full items-center">
			{/* Introduction */}
			<div className="flex flex-col gap-4 sm:gap-6 items-start bg-base/20 backdrop-blur-sm">
				<p className="text-primary font-semibold">&gt;_ CONTACT ME</p>
				<div className="flex flex-col items-end">
					<h1 className="font-medium text-4xl sm:text-5xl text-shadow-lg">
						Let's <span className="font-bold text-primary">Get In Touch_</span>
					</h1>
				</div>
				<p className="text-content/60 max-w-100">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo dolores excepturi earum vel
					provident itaque distinctio mollitia alias libero.
				</p>
			</div>

			<div className="flex gap-8 flex-col lg:flex-row self-stretch lg:self-auto">
				<div className="flex gap-4 sm:gap-8 flex-col md:flex-row lg:flex-col">
					<div className="flex flex-col sm:flex-row md:flex-col gap-4 sm:gap-8 self-auto sm:self-center md:self-auto ">
						{/* Location */}
						<div className="flex gap-4 items-center">
							<div className="border border-content/20 bg-neutral p-2 rounded-lg flex justify-center items-center aspect-square">
								<MapPinIcon size={32} className="shrink-0" />
							</div>
							<div className="flex flex-col gap-2 items-start">
								<p className="font-medium text-primary">LOCATION</p>
								<p className="text-content/60 text-nowrap">Orlando, Florida</p>
							</div>
						</div>

						{/* Location */}
						<div className="flex gap-4 items-center">
							<div className="border border-content/20 bg-neutral p-2 rounded-lg flex justify-center items-center aspect-square">
								<HourglassHighIcon size={32} className="shrink-0" />
							</div>
							<div className="flex flex-col gap-2 items-start">
								<p className="font-medium text-primary">RESPONSE TIME</p>
								<p className="text-content/60 text-nowrap">Within 24 hours</p>
							</div>
						</div>
					</div>

					{/* Socials */}
					<div className="grow">
						<PrimaryPanel className="gap-4">
							<p className="font-semibold text-primary">Let's Connect!</p>
							<p className="text-content/60">Find me on these platforms.</p>
							<SocialLink
								icon={<GithubLogoIcon size={24} weight="bold" className="shrink-0" />}
								title="GitHub"
								displayLink="github.com/XutaoG"
								fullLink="https://github.com/XutaoG"
								action="link"
							/>
							<SocialLink
								icon={<LinkedinLogoIcon size={24} weight="bold" className="shrink-0" />}
								title="LinkedIn"
								displayLink="linkedin.com/in/xutaogao"
								fullLink="https://www.linkedin.com/in/xutaogao"
								action="link"
							/>
							<SocialLink
								icon={<EnvelopeIcon size={24} weight="bold" className="shrink-0" />}
								title="Email"
								displayLink="xutao.gao04@gmail.com"
								fullLink="xutao.gao04@gmail.com"
								action="copy"
							/>
						</PrimaryPanel>
					</div>
				</div>

				<TerminalWindowPanel title="Message Me" command="contact_me.exe">
					<p className="text-content/60">Fill out the form below and I‘ll get back to you.</p>
					<div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
						<InputField title="Full Name" placeholder="John Doe" />
						<InputField title="Email Address" placeholder="example@email.com" />
					</div>
					<InputField title="Subject" placeholder="What’s this about?" />
					<TextArea title="Message" placeholder="Your message..." />
					<Button className="self-start">SEND</Button>
				</TerminalWindowPanel>
			</div>

			<p className="text-center">
				<span className="text-primary font-semibold">&lt;</span> Thanks for stopping by! I appreciate you taking
				the time to reach out. <span className="text-primary font-semibold tracking-widest">&gt;</span>
			</p>
		</div>
	);
};
