import Link from "next/link";
import { Text } from "../components/atoms/Text";
import { Button } from "../components/atoms/Button";
import "./globals.css";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[color:var(--bg-color)] text-[color:var(--text-primary)] relative px-6 text-center">
      {/* Background Geometry */}
      <div className="fixed top-0 left-0 w-screen h-screen z-[-1] overflow-hidden pointer-events-none opacity-40">
        <div className="geo-shape w-[300px] h-[300px] top-[10%] left-[5%] bg-[color:var(--accent-primary)] [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>
        <div className="geo-shape w-[400px] h-[400px] bottom-[10%] right-[5%] bg-[#7000ff] [clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)]"></div>
      </div>

      <div className="max-w-md flex flex-col items-center">
        {/* Glow Icon */}
        <div className="w-24 h-24 rounded-none border border-[color:var(--border-color)] flex items-center justify-center mb-8 bg-[color:var(--card-bg)] shadow-[0_10px_30px_-10px_var(--accent-glow)]">
          <i className="fas fa-exclamation-triangle text-3xl text-[color:var(--accent-primary)] animate-pulse"></i>
        </div>

        <Text as="h1" className="font-heading text-8xl font-bold tracking-tight text-[color:var(--text-primary)] mb-2 select-none">
          404
        </Text>
        
        <Text as="h2" className="font-heading text-2xl font-semibold text-[color:var(--accent-primary)] mb-4">
          Page Not Found
        </Text>

        <Text as="p" className="text-[color:var(--text-secondary)] mb-10 text-base leading-relaxed">
          Sorry, the page you are looking for could not be found or has been moved to another address.
        </Text>

        <Button
          as={Link}
          href="/"
          variant="primary"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
