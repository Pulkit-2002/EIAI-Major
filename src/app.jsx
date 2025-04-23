import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    title: "Upload Basic Profile",
    description: "Student uploads their profile with skills, interests, and goals.",
  },
  {
    title: "AI Matches Top 3 Jobs",
    description: "Our AI analyzes and recommends the best-fit roles.",
  },
  {
    title: "Explain 'Why Matched'",
    description: "Transparent reasoning behind each match for better clarity.",
  },
  {
    title: "Student Applies",
    description: "Students pick and apply directly within the platform.",
  },
  {
    title: "Employer Sees Anonymized Skill Card",
    description: "Employers view skill-based anonymous profiles to reduce bias.",
  },
  {
    title: "Mutual Acceptance",
    description: "When both agree, the internship or micro-job is finalized.",
  },
  {
    title: "Internship / Micro-job Begins",
    description: "Students and employers kick off the collaboration.",
  },
  {
    title: "Feedback + Skill Growth Tracker",
    description: "Feedback updates the student's dynamic skill portfolio.",
  },
];

export default function InternshipFlow() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-2">Internship Journey Prototype</h1>
        <p className="text-gray-600">Experience the flow from profile upload to success!</p>
      </motion.div>

      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="p-6">
          <CardContent className="flex flex-col items-center">
            <motion.h2
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {steps[currentStep].title}
            </motion.h2>
            <motion.p
              className="text-gray-700 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {steps[currentStep].description}
            </motion.p>
            <div className="flex gap-4 mt-6">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
                Back
              </Button>
              <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>
                Next <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
