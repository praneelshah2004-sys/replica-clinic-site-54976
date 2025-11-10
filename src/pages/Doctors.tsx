import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Heart, Mail, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import drRollins from "@/assets/dr-rollins.jpg";
import drMalerman from "@/assets/dr-malerman.png";
import { Link } from "react-router-dom";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Thomas Rollins",
      title: "DDS, Orthodontist",
      image: drRollins,
      education: [
        "Dental Degree - Louisiana State University School of Dentistry",
        "Specialty Certificate - Jacksonville University School of Orthodontics",
      ],
      specialties: [
        "Early treatment of children",
        "Adolescent orthodontics",
        "Adult orthodontics",
        "Complex cases including congenitally missing teeth",
      ],
      bio: "Dr. Rollins has dedicated his practice exclusively to orthodontics, combining extensive training in both restorative dentistry and orthodontics to provide comprehensive care. His passion lies in helping patients achieve newfound confidence through their smiles, offering every available treatment option to achieve optimal aesthetic and functional results.",
      philosophy: "Dr. Rollins believes that everyone deserves a great smile. He's witnessed firsthand how orthodontic treatment can transform not just smiles, but lives—boosting self-esteem, improving social interactions, and opening doors to better opportunities.",
      background: "A veteran who served in the Army Reserves during the Iraq conflict, Dr. Rollins brings discipline and dedication to his practice. His journey from electrician to dentist to orthodontist reflects his commitment to finding his true calling in creating beautiful smiles.",
    },
    {
      name: "Dr. Arnold J. Malerman",
      title: "Orthodontist",
      image: drMalerman,
      education: [
        "Advanced Orthodontic Training",
        "Continuing Education in Modern Orthodontic Techniques",
      ],
      specialties: [
        "Traditional braces",
        "Clear aligners",
        "Early interceptive treatment",
        "Adult orthodontics",
      ],
      bio: "Dr. Malerman is a highly experienced orthodontist dedicated to making beautiful smiles one patient at a time. With years of practice and a commitment to staying current with the latest orthodontic advances, he provides personalized care tailored to each patient's unique needs.",
      philosophy: "Creating beautiful, healthy smiles is more than a profession—it's a calling. Dr. Malerman takes pride in building lasting relationships with patients and their families while delivering exceptional orthodontic results.",
      background: "Known for his gentle approach and attention to detail, Dr. Malerman has built a reputation as a trusted orthodontist in the community. His practice focuses on providing quality care in a comfortable, welcoming environment.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Meet Our Doctors
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert orthodontists dedicated to creating beautiful, healthy smiles
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {doctors.map((doctor, index) => (
              <AnimatedSection key={doctor.name} delay={index * 100}>
                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                      {/* Image Section */}
                      <div className={`relative bg-gradient-to-br from-primary/5 to-primary/10 p-12 flex items-center justify-center ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="relative w-64 h-64 object-cover rounded-full border-4 border-background shadow-2xl"
                          />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                        <div className="mb-6">
                          <h2 className="text-3xl md:text-4xl font-bold mb-2">{doctor.name}</h2>
                          <p className="text-xl text-primary font-semibold">{doctor.title}</p>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <GraduationCap className="w-5 h-5 text-primary" />
                              <h3 className="text-lg font-semibold">Education</h3>
                            </div>
                            <ul className="space-y-2 ml-7">
                              {doctor.education.map((edu, i) => (
                                <li key={i} className="text-muted-foreground">{edu}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Award className="w-5 h-5 text-primary" />
                              <h3 className="text-lg font-semibold">Specialties</h3>
                            </div>
                            <ul className="space-y-2 ml-7">
                              {doctor.specialties.map((specialty, i) => (
                                <li key={i} className="text-muted-foreground">• {specialty}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Heart className="w-5 h-5 text-primary" />
                              <h3 className="text-lg font-semibold">About</h3>
                            </div>
                            <p className="text-muted-foreground ml-7 mb-4">{doctor.bio}</p>
                            <p className="text-muted-foreground ml-7 mb-4">{doctor.philosophy}</p>
                            <p className="text-muted-foreground ml-7">{doctor.background}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Smile Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Schedule a consultation with one of our expert orthodontists today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
              <Link to="/virtual-consultation">
                <Button size="lg" variant="outline" className="text-lg bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20">
                  <Phone className="mr-2 h-5 w-5" />
                  Virtual Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Doctors;
