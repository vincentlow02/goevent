import { Container } from "@/components/ui/Container";

export const Navbar = () => {
  return (
    <nav className="border-b border-slate-100 py-4 bg-surface-lowest">
      <Container>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-brand-primary">
            SeminarDesign
          </div>
          <div className="flex gap-8 text-sm font-medium text-brand-secondary">
            <a href="#" className="hover:text-brand-primary transition-colors">Features</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Pricing</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Documentation</a>
          </div>
          <div className="flex gap-4">
            <button className="text-sm font-medium text-brand-primary">Sign In</button>
            <button className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium">Get Started</button>
          </div>
        </div>
      </Container>
    </nav>
  );
};
