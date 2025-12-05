import '../../(dashboard)/styles/globals.css';
import './styles.css';
export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}