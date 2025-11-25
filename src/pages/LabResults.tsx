import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const LabResults = () => {
  // Placeholder data - in the future, this can be made dynamic
  const labResults = [
    {
      id: 1,
      productName: "GHK-Cu 1% Serum",
      batchNumber: "Batch #12345",
      date: "2025-01-15",
      description: "Third-party lab testing results for purity and potency",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Lab Results</h1>
        <p className="text-muted-foreground mb-12">
          Transparency and quality are at the heart of everything we do. View our third-party lab test results below.
        </p>

        <div className="space-y-6">
          {labResults.map((result) => (
            <div key={result.id} className="bg-card rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{result.productName}</h3>
                  <p className="text-muted-foreground mb-1">{result.batchNumber}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Tested: {new Date(result.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm">{result.description}</p>
                </div>
                <Button variant="outline" size="sm" className="ml-4">
                  <FileText className="h-4 w-4 mr-2" />
                  View Report
                </Button>
              </div>
            </div>
          ))}

          <div className="text-center py-12 text-muted-foreground">
            <p>More lab results coming soon</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LabResults;
