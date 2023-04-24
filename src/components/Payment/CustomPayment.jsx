import { Flex, Box, Button, Text, Heading } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { FiCheckCircle } from "react-icons/fi";
import PersonalInfoForm from "./PersonalInfoForm";

const steps = [
  { label: "Step 1 ", description: "Personal Information" },
  { label: "Step 2 ", description: "Address Information" },
  { label: "Step 3 ", description: "Place Order" },
];

export const CustomPayment = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
    <Flex w={"90vw"} margin="0 auto">
      <Flex flexDir="column" width="100%" w={"60vw"} margin="0 auto">
        <Steps
          colorScheme="telegram"
          activeStep={activeStep}
          display="flex"
          fontSize={"2rem"}
          gap="1rem"
        >
          {steps.map(({ label, description }, index) => (
            <Step label={label} key={label} description={description}>
              {description === "Personal Information" && <PersonalInfoForm />}
              {description === "Address Information" && <Text>Step 2 par</Text>}
              {description === "Place Order" && <Text>Step 3 par</Text>}
            </Step>
          ))}
        </Steps>
        {activeStep === steps.length ? (
          <Flex px={4} py={4} width="100%" flexDirection="column">
            <Heading fontSize="xl" textAlign="center">
              Woohoo! All steps completed!
            </Heading>
            <Button mx="auto" mt={6} size="sm" onClick={reset}>
              Reset
            </Button>
          </Flex>
        ) : (
          <Flex width="100%" justify="center" align="center" mb={"4rem"}>
            <Button
              isDisabled={activeStep === 0}
              mr={4}
              onClick={prevStep}
              size="sm"
              variant="ghost"
            >
              Prev
            </Button>
            <Button size="sm" onClick={nextStep}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default CustomPayment;
