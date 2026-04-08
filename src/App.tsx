import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import GalleryAdmin from "./pages/GalleryAdmin.tsx";
import YogaClassesGurgaon from "./pages/YogaClassesGurgaon.tsx";
import HomeYogaGurgaon from "./pages/HomeYogaGurgaon.tsx";
import WeightLossYogaGurgaon from "./pages/WeightLossYogaGurgaon.tsx";
import PersonalYogaTrainerGurgaon from "./pages/PersonalYogaTrainerGurgaon.tsx";
import CorporateYogaGurgaon from "./pages/CorporateYogaGurgaon.tsx";
import MorningYogaGurgaon from "./pages/MorningYogaGurgaon.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery-admin" element={<GalleryAdmin />} />
          <Route path="/yoga-classes-gurgaon" element={<YogaClassesGurgaon />} />
          <Route path="/home-yoga-gurgaon" element={<HomeYogaGurgaon />} />
          <Route path="/weight-loss-yoga-gurgaon" element={<WeightLossYogaGurgaon />} />
          <Route path="/personal-yoga-trainer-gurgaon" element={<PersonalYogaTrainerGurgaon />} />
          <Route path="/corporate-yoga-gurgaon" element={<CorporateYogaGurgaon />} />
          <Route path="/morning-yoga-gurgaon" element={<MorningYogaGurgaon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
