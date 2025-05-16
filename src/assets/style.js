const styles = `
@keyframes glow {
    0% { box-shadow: 0 0 10px rgba(139, 92, 246, 0.5); }
    50% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.8); }
    100% { box-shadow: 0 0 10px rgba(139, 92, 246, 0.5); }
}

@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
}

@keyframes twinkle {
    0% { background-color: rgba(255, 255, 255, 0); }
    50% { background-color: rgba(255, 255, 255, 0.05); }
    100% { background-color: rgba(255, 255, 255, 0); }
}

.animate-glow-pulse {
    animation: glow 3s infinite ease-in-out;
}

.animate-float {
    animation: float 6s infinite ease-in-out;
}

.animate-twinkle {
    animation: twinkle 4s infinite ease-in-out;
}
`;

export default styles;
