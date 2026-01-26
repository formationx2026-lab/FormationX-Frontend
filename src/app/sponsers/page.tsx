"use client";

import { useState, useMemo } from "react";
import { Button } from "@/app/components/ui/Button";
import { SponsorCard } from "@/app/components/sponser/SponsorCard";
import { FilterBar } from "@/app/components/sponser/FilterBar";
import { SponsorFormDialog } from "@/app/components/sponser/SponsorFormDialog"
import { DeleteConfirmDialog } from "@/app/components/sponser/DeleteConfirmDialog";
import { StatsCards } from "@/app/components/sponser/StatsCards";
import { mockSponsors } from "@/app/data/mockSponsors";
import { Sponsor, SponsorTier } from "@/app/types/sponsor";
import { Plus, Sparkles } from "lucide-react";


import {useToast} from "@/app/admin-dashboard/hooks/use-toast"

export default function Page() {
  const { toast } = useToast();

  const [sponsors, setSponsors] = useState<Sponsor[]>(mockSponsors);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<SponsorTier | null>(null);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSponsor, setEditingSponsor] = useState<Sponsor | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [sponsorToDelete, setSponsorToDelete] = useState<Sponsor | null>(null);

  // Filter sponsors
  const filteredSponsors = useMemo(() => {
    return sponsors.filter((sponsor) => {
      const matchesSearch =
        sponsor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sponsor.contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sponsor.contactEmail.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCity = !selectedCity || sponsor.city === selectedCity;
      const matchesArea = !selectedArea || sponsor.area === selectedArea;
      const matchesTier = !selectedTier || sponsor.tier === selectedTier;

      return matchesSearch && matchesCity && matchesArea && matchesTier;
    });
  }, [sponsors, searchQuery, selectedCity, selectedArea, selectedTier]);

  const hasActiveFilters = !!(
    searchQuery ||
    selectedCity ||
    selectedArea ||
    selectedTier
  );

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCity(null);
    setSelectedArea(null);
    setSelectedTier(null);
  };

  const handleAddNew = () => {
    setEditingSponsor(null);
    setIsFormOpen(true);
  };

  const handleEdit = (sponsor: Sponsor) => {
    setEditingSponsor(sponsor);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    const sponsor = sponsors.find((s) => s.id === id);
    if (sponsor) {
      setSponsorToDelete(sponsor);
      setDeleteDialogOpen(true);
    }
  };

  const confirmDelete = () => {
    if (sponsorToDelete) {
      setSponsors((prev) =>
        prev.filter((s) => s.id !== sponsorToDelete.id)
      );
      toast({
        title: "Sponsor Deleted",
        description: `${sponsorToDelete.name} has been removed.`,
      });
      setSponsorToDelete(null);
      setDeleteDialogOpen(false);
    }
  };

  const handleSave = (
    data: Omit<Sponsor, "id" | "createdAt"> & { id?: string }
  ) => {
    if (data.id) {
      // Update existing
      setSponsors((prev) =>
        prev.map((s) =>
          s.id === data.id ? ({ ...s, ...data } as Sponsor) : s
        )
      );
      toast({
        title: "Sponsor Updated",
        description: `${data.name} has been updated successfully.`,
      });
    } else {
      // Add new
      const newSponsor: Sponsor = {
        ...data,
        id: Date.now().toString(),
        createdAt: new Date(),
      };
      setSponsors((prev) => [newSponsor, ...prev]);
      toast({
        title: "Sponsor Added",
        description: `${data.name} has been added successfully.`,
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidd ">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none ">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 animate-slide-up">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center glow-primary neon-border">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold  ">
                Sponsor Management
              </h1>
            </div>
            <p className="text-muted-foreground ml-15">
              Manage your hackathon sponsors and partnerships
            </p>
          </div>
          <Button
            onClick={handleAddNew}
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary transition-all duration-300 hover:scale-105 font-display"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Sponsor
          </Button>
        </div>

        {/* Stats */}
        <StatsCards sponsors={sponsors} />

        {/* Filters */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCity={selectedCity}
          onCityChange={setSelectedCity}
          selectedArea={selectedArea}
          onAreaChange={setSelectedArea}
          selectedTier={selectedTier}
          onTierChange={setSelectedTier}
          onClearFilters={handleClearFilters}
          hasActiveFilters={hasActiveFilters}
        />

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-muted-foreground text-sm">
            Showing{" "}
            <span className="text-foreground font-medium">
              {filteredSponsors.length}
            </span>{" "}
            of{" "}
            <span className="text-foreground font-medium">
              {sponsors.length}
            </span>{" "}
            sponsors
          </p>
        </div>

        {/* Sponsor Grid */}
        {filteredSponsors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSponsors.map((sponsor, index) => (
              <div
                key={sponsor.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <SponsorCard
                  sponsor={sponsor}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card p-12 text-center animate-scale-in neon-border">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary animate-float" />
            </div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">
              No sponsors found
            </h3>
            <p className="text-muted-foreground mb-4">
              {hasActiveFilters
                ? "Try adjusting your filters to find sponsors."
                : "Get started by adding your first sponsor."}
            </p>
            {hasActiveFilters ? (
              <Button
                variant="ghost"
                onClick={handleClearFilters}
                className="hover:bg-destructive/10 hover:text-destructive"
              >
                Clear Filters
              </Button>
            ) : (
              <Button
                onClick={handleAddNew}
                className="bg-primary text-primary-foreground glow-primary hover:scale-105 transition-all duration-300 font-display"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add First Sponsor
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Dialogs */}
      <SponsorFormDialog
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        sponsor={editingSponsor}
        onSave={handleSave}
      />

      <DeleteConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        sponsorName={sponsorToDelete?.name || ""}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
