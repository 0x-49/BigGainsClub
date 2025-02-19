import { SiDiscord, SiYoutube, SiTiktok, SiX, SiInstagram } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Big Gains Club</h3>
            <p className="text-muted-foreground">
              Elite trading education and community for serious traders.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-muted-foreground">
              2250 N Druid Hills Rd NE,<br />
              Atlanta, GA 30329
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://discord.gg/biggainsclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <SiDiscord className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com/channel/UCwSYjoaNa1ZJ4e2W5vcdTCA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <SiYoutube className="h-6 w-6" />
              </a>
              <a
                href="https://tiktok.com/@biggainsclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <SiTiktok className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/biggainsclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <SiX className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/biggainsclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <SiInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-muted-foreground text-sm pt-8 border-t border-primary/20">
          <p>&copy; {currentYear} Big Gains Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}