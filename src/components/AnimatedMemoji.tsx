"use client";

interface AnimatedMemojiProps {
  memoji: string;
}

export default function AnimatedMemoji({ memoji }: AnimatedMemojiProps) {
  return (
    <div className="memoji-container">
      <div className="memoji">{memoji || "👋"}</div>

      <style jsx>{`
        .memoji-container {
          perspective: 1000px;
          display: inline-block;
        }

        .memoji {
          font-size: 4rem;
          display: inline-block;
          transform-style: preserve-3d;
          animation: ${memoji === "🚀" ? "handshake" : "wave"} 2s ease-in-out
            infinite;
        }

        @keyframes wave {
          0%,
          100% {
            transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
          }
          25% {
            transform: rotateY(-15deg) rotateX(10deg) rotateZ(-10deg);
          }
          50% {
            transform: rotateY(15deg) rotateX(-5deg) rotateZ(10deg);
          }
          75% {
            transform: rotateY(-10deg) rotateX(5deg) rotateZ(-5deg);
          }
        }

        @keyframes handshake {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .memoji:hover {
          animation: wave 0.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
