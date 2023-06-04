export const svgVariants = {
    start: {
        opacity: 0,
        pathLength: 0,
    },
    finished: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut",
            type: "spring",
        },
    },
};

export const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

export const fadeNav = (delay: number, duration: number) => ({
    start: {
        opacity: 0,
        scale: 0.5,
    },
    finished: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            delay,
            duration,
            ease: "easeOut",
        },
    },
});

export const fadeTitle = (dir: string, delay = 0, duration = 0) => ({
    hidden: {
        opacity: 0,
        x: dir === "left" ? -50 : dir == "right" ? 50 : 0,
        y: dir === "top" ? -50 : dir === "bottom" ? 50 : 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            delay,
            type: "spring",
            duration,
        },
    },
});
export const heroImage = {
    initial: {
        scale: 0,
    },
    finished: {
        scale: 1,
        transition: {
            duration: 1,
            type: "spring",
        },
    },
};
export const fadeNavMobile = (delay: number, duration: number) => ({
    opacity:[0,1],
    transition: {
        type: "spring",
        delay,
        duration,
    }
});
export const fadeCard = (dir: string, delay = 0, duration = 0) => ({
    hidden: {
        opacity: 0,
        x: dir === "left" ? [-50, 0] : dir == "right" ? [50, 0] : 0,
        y: dir === "top" ? [-50, 0] : dir === "bottom" ? [50, 0] : 0,
    },
    finished: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            delay,
            duration,
            ease: "easeOut",
        },
    }
})
export const fadeCardAnimate = (delay = 0, duration = 0) => ({
    opacity: [0, 1], y: [-50, 0], transition: {
        type: "spring",
        delay,
        duration,
        ease: "easeOut",
    }
})

export const socialAnimate = (delay = 0, duration = 0) => ({
    scale: [.5, 1],
    transition: {
        type: "spring",
        delay,
        duration,
        ease: "easeOut",
    }
})
