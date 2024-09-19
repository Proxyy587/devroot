"use client";

import AnimatedShinyText from "@/components/ui/shimmer-text";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import TextBlur from "../ui/text-blur";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { EnhancedButton } from "../ui/enchancedBtn";
import { useEffect, useState } from "react";

export default function Hero() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);
	return (
		<motion.div
			className="flex w-full max-w-3xl flex-col gap-2"
			variants={containerVariants}
			initial="hidden"
			animate={isVisible ? "visible" : "hidden"}
		>
			<motion.div variants={itemVariants}>
				<div className="flex items-center justify-center">
					<div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
						<AnimatedShinyText className="px-4 py-1">
							<span>Currently in Alpha Testing! 🪲</span>
						</AnimatedShinyText>
					</div>
				</div>
			</motion.div>

			<motion.div variants={itemVariants}>
				<TextBlur
					className="text-center text-4xl font-medium tracking-tighter sm:text-6xl"
					text="Effortlessly create your own Portfolio with Devroots"
				/>
			</motion.div>

			<motion.div variants={itemVariants}>
				<TextBlur
					className="mx-auto max-w-[27rem] pt-3 text-center text-base text-muted-foreground sm:text-lg"
					text="Create your own Portfolio and get access to your alpha dashboard"
					duration={0.8}
				/>
			</motion.div>
			<motion.div
				variants={itemVariants}
				className="mt-4 flex flex-col md:flex-row w-full items-center justify-center gap-4 md:mt-6 md:gap-6"
			>
				<EnhancedButton
					variant={"expandIcon"}
					Icon={ArrowRight}
					iconPlacement="right"
					className="flex items-center font-medium group transform hover:scale-105 transition-transform duration-200 ease-out"
				>
					Get Updates
				</EnhancedButton>
				<Button className="hover:shadow-sm font-medium hover:scale-105 transition-transform duration-200 ease-out">
					Claim Your Devroot
				</Button>
			</motion.div>
		</motion.div>
	);
}
