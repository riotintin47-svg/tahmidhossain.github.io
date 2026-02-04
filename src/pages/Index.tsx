import { Mail, Phone, MapPin, ChevronDown, Briefcase, GraduationCap, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Photo */}
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                <img
                  src={profilePhoto}
                  alt="MD. Tahmid Hossain"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                E-commerce Pro
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-center lg:text-left max-w-2xl">
              <p className="text-blue-400 font-medium mb-2 lg:text-center">E-commerce Operations Professional</p>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 lg:text-center">
                MD. TAHMID HOSSAIN
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Skilled in managing US-based Walmart, eBay, and TikTok Shop stores. Expert in product research, listing optimization, and driving sales performance.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <a href="tel:+8801796107689" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  01796-107689
                </a>
                <a href="mailto:tahmidhossain01@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  tahmidhossain01@gmail.com
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection("experience")}
                  className="border-slate-500 text-slate-300 hover:bg-slate-700"
                >
                  View Experience
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hover:text-white transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-medium mb-2">About Me</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">
              Driving E-commerce Success
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Detail-oriented E-commerce Operations Professional with hands-on experience managing US-based Walmart, eBay, and TikTok Shop stores. I specialize in transforming online stores into high-performing sales channels.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
              My expertise spans product research, listing optimization, order fulfillment, inventory control, and customer support. I'm adept at managing daily operations, improving sales performance, and ensuring high customer satisfaction in fast-paced online marketplaces.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Product Research", desc: "Identifying winning products through market analysis" },
                { title: "Sales Optimization", desc: "Driving revenue through strategic listing improvements" },
                { title: "Customer Support", desc: "Ensuring satisfaction with professional communication" },
                { title: "Operations", desc: "Managing end-to-end store workflows efficiently" },
              ].map((item, i) => (
                <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-slate-800">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-medium mb-2">Career Journey</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">
              Professional Experience
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* Experience Item 1 */}
            <Card className="border-l-4 border-l-blue-600 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary">2025</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-1">
                      E-commerce Operations Officer
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">Prace BD</p>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Managed multiple eBay and TikTok Shop (US) stores and daily operations
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Conducted market research to identify trending and profitable products
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Created and optimized product listings for better visibility and conversion
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Coordinated order fulfillment and shipment tracking
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Delivered professional customer support and resolved post-sale issues
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience Item 2 */}
            <Card className="border-l-4 border-l-slate-400 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-full">
                    <Briefcase className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary">2020</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-1">
                      E-commerce Operations Officer
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">Fleet Bangladesh</p>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Managed Walmart US store operations and daily workflows
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Conducted product research and optimized listings to maximize sales
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Handled order processing, shipment tracking, and inventory updates
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Provided timely customer support, resolving queries and ensuring satisfaction
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Monitored store performance and ensured smooth operational execution
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-medium mb-2">Expertise</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">
              Skills & Capabilities
            </h2>
          </div>

          {/* Platform Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Walmart", "eBay", "TikTok Shop"].map((platform) => (
              <Badge key={platform} className="px-6 py-2 text-lg bg-blue-600 hover:bg-blue-700">
                {platform}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* E-commerce Skills */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 dark:text-white mb-4 text-center">
                  E-commerce & Operations
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Store Management", "Product Research", "Listing Optimization", "Order Fulfillment", "Inventory Management", "Customer Support"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 dark:text-white mb-4 text-center">
                  Technical & Digital
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["MS Excel", "MS Word", "Internet Research", "Email Communication", "Digital Marketing"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Professional Attributes */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 dark:text-white mb-4 text-center">
                  Professional Attributes
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Attention to Detail", "Time Management", "Problem Solving", "Adaptability", "Communication"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Language */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 dark:text-white mb-4 text-center">
                  Language Proficiency
                </h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="font-medium text-slate-800 dark:text-white">Bengali</p>
                    <p className="text-sm text-slate-500">Native</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-slate-800 dark:text-white">English</p>
                    <p className="text-sm text-slate-500">Professional Working</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-medium mb-2">Academic Background</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">
              Educational Qualifications
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* BA */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                      Bachelor of Arts (BA – Pass Course)
                    </h3>
                    <p className="text-blue-600 font-medium">Rajshahi Government City College</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">2022 - Present</Badge>
                      <Badge className="bg-yellow-100 text-yellow-700">Ongoing</Badge>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">National University</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* HSC */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                      Higher Secondary Certificate (HSC)
                    </h3>
                    <p className="text-blue-600 font-medium">Varendra College, Rajshahi</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">2016</Badge>
                      <Badge variant="outline">📚 Group: Science</Badge>
                      <Badge variant="outline">GPA: 3.83/5.00</Badge>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">Rajshahi Board</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SSC */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                      Secondary School Certificate (SSC)
                    </h3>
                    <p className="text-blue-600 font-medium">Rajshahi Shikkha Board Model School & College</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">2014</Badge>
                      <Badge variant="outline">📚 Group: Science</Badge>
                      <Badge variant="outline">GPA: 3.69/5.00</Badge>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">Rajshahi Board</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-medium mb-2">Get In Touch</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">
              Let's Connect
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl mx-auto">
              Interested in working together? Feel free to reach out for collaborations or just a friendly chat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <a href="tel:+8801796107689" className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium text-slate-800 dark:text-white">+880 1796-107689</p>
                </div>
              </a>

              <a href="mailto:tahmidhossain01@gmail.com" className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium text-slate-800 dark:text-white">tahmidhossain01@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium text-slate-800 dark:text-white">Rajshahi, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">
                  Send a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="bg-slate-50 dark:bg-slate-700" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="bg-slate-50 dark:bg-slate-700" />
                  </div>
                  <div>
                    <Textarea placeholder="Message" rows={4} className="bg-slate-50 dark:bg-slate-700" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-slate-400 text-center">
        <p>© 2025 MD. Tahmid Hossain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
