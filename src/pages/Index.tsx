import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, FileJson, Code, Github, Figma, Download } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-brand-yellow text-brand-dark hover:bg-brand-yellow-dark">
            Version 14.0.0
          </Badge>
          <h1 className="text-display mb-6 bg-gradient-to-r from-brand-yellow via-accent-orange to-accent-purple bg-clip-text text-transparent">
            V14 Design System
          </h1>
          <p className="text-body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
            A production-ready design system with comprehensive design tokens, ready for GitHub
            and Figma integration. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="interaction-scale" size="lg">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
            <Button variant="outline" className="interaction-scale" size="lg">
              <Figma className="mr-2 h-5 w-5" />
              Import to Figma
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Design Tokens */}
          <Card className="p-organisms bg-card/80 backdrop-glass border border-border/30 interaction-scale">
            <div className="bg-accent-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <FileJson className="h-6 w-6 text-accent-blue" />
            </div>
            <h3 className="text-h3 mb-2">Design Tokens</h3>
            <p className="text-body-small text-muted-foreground mb-4">
              Complete token library in JSON format. Import directly into Figma using Tokens Studio
              plugin or manually create variables.
            </p>
            <Badge variant="secondary" className="text-caption">
              100% Coverage
            </Badge>
          </Card>

          {/* Color System */}
          <Card className="p-organisms bg-card/80 backdrop-glass border border-border/30 interaction-scale">
            <div className="bg-accent-purple/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Palette className="h-6 w-6 text-accent-purple" />
            </div>
            <h3 className="text-h3 mb-2">Color System</h3>
            <p className="text-body-small text-muted-foreground mb-4">
              HSL-based color palette with brand colors, accents, and semantic tokens. All colors
              accessible and WCAG AA compliant.
            </p>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-yellow"></div>
              <div className="w-6 h-6 rounded-full bg-accent-blue"></div>
              <div className="w-6 h-6 rounded-full bg-accent-green"></div>
              <div className="w-6 h-6 rounded-full bg-accent-purple"></div>
            </div>
          </Card>

          {/* Code Ready */}
          <Card className="p-organisms bg-card/80 backdrop-glass border border-border/30 interaction-scale">
            <div className="bg-accent-green/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-accent-green" />
            </div>
            <h3 className="text-h3 mb-2">Production Ready</h3>
            <p className="text-body-small text-muted-foreground mb-4">
              Fully implemented in React with TypeScript. Custom Tailwind configuration and CSS
              variables ready to use.
            </p>
            <Badge variant="secondary" className="text-caption">
              TypeScript
            </Badge>
          </Card>
        </div>
      </section>

      {/* Token Preview */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 mb-8 text-center">Design Token Samples</h2>
          
          {/* Typography Scale */}
          <Card className="p-large-cards bg-card/80 backdrop-glass border border-border/30 mb-6">
            <h3 className="text-h3 mb-4 text-accent-blue">Typography Scale</h3>
            <div className="space-y-3">
              <div className="text-display">Display Text (40px)</div>
              <div className="text-h1">Heading 1 (32px)</div>
              <div className="text-h2">Heading 2 (24px)</div>
              <div className="text-h3">Heading 3 (18px)</div>
              <div className="text-body-large">Body Large (15px)</div>
              <div className="text-body">Body Text (14px)</div>
              <div className="text-body-small">Body Small (12px)</div>
              <div className="text-caption">Caption Text (11px)</div>
            </div>
          </Card>

          {/* Spacing System */}
          <Card className="p-large-cards bg-card/80 backdrop-glass border border-border/30 mb-6">
            <h3 className="text-h3 mb-4 text-accent-purple">Spacing System</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-16 text-body-small text-muted-foreground">Atoms</div>
                <div className="h-12 bg-accent-blue/20 rounded" style={{ width: '16px' }}></div>
                <span className="text-body-small">16px</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 text-body-small text-muted-foreground">Molecules</div>
                <div className="h-12 bg-accent-purple/20 rounded" style={{ width: '20px' }}></div>
                <span className="text-body-small">20px</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 text-body-small text-muted-foreground">Organisms</div>
                <div className="h-12 bg-accent-green/20 rounded" style={{ width: '24px' }}></div>
                <span className="text-body-small">24px</span>
              </div>
            </div>
          </Card>

          {/* Shadow Levels */}
          <Card className="p-large-cards bg-card/80 backdrop-glass border border-border/30">
            <h3 className="text-h3 mb-4 text-accent-orange">Shadow Levels</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="h-24 bg-background rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-caption">SM</span>
              </div>
              <div className="h-24 bg-background rounded-lg shadow-md flex items-center justify-center">
                <span className="text-caption">MD</span>
              </div>
              <div className="h-24 bg-background rounded-lg shadow-card flex items-center justify-center">
                <span className="text-caption">CARD</span>
              </div>
              <div className="h-24 bg-background rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-caption">LG</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Documentation Links */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 mb-6">Documentation & Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-molecules bg-card/80 backdrop-glass border border-border/30 interaction-scale">
              <Download className="h-8 w-8 mx-auto mb-3 text-accent-blue" />
              <h4 className="text-h4 mb-2">Design Tokens</h4>
              <p className="text-body-small text-muted-foreground mb-3">
                JSON files ready for import
              </p>
              <Button variant="outline" size="sm" className="w-full">
                View Tokens
              </Button>
            </Card>
            
            <Card className="p-molecules bg-card/80 backdrop-glass border border-border/30 interaction-scale">
              <Figma className="h-8 w-8 mx-auto mb-3 text-accent-purple" />
              <h4 className="text-h4 mb-2">Figma Import Guide</h4>
              <p className="text-body-small text-muted-foreground mb-3">
                Free version compatible
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Read Guide
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-body-small text-muted-foreground">
            V14 Design System • Version 14.0.0 • Production Ready
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
