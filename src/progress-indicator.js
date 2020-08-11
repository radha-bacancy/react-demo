import React from "react";
import PropTypes from "prop-types"; // ES6
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 20px;
  text-align: center;
  width: fit-content;
`;

const StepsContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Step = styled.div`
  height: 27px;
  width: 18px;
  background: ${(props) => props.background};
  border: 2px solid #d1d1d1;
  margin-right: 5px;
`;

const defaultIncompleteFill = "#f5f5f5";
const defaultFill = "#456bdc";

const cancelledFill = "#f006";

const ProgressIndicator = ({
  progressSteps,
  completefill,
  incompleteFill,
  currentStep = 0,
  cancelled = false,
}) => {
  const stepLength = progressSteps.length;

  return (
    <Container>
      {stepLength >= 3 && stepLength <= 8 ? (
        <>
          <StepsContainer>
            {progressSteps.map((props, index) => {
              const compFill = props.completefill
                ? props.completefill
                : completefill
                ? completefill
                : defaultFill;
              const incompFill = incompleteFill
                ? incompleteFill
                : defaultIncompleteFill;
              const stepFill = currentStep >= index ? compFill : incompFill;

              return <Step background={cancelled ? cancelledFill : stepFill} />;
            })}
          </StepsContainer>
          <div>
            {cancelled ? "Cancelled!" : progressSteps[currentStep].label}
          </div>
        </>
      ) : (
        <div>Too {stepLength > 3 ? "Many" : "Less"} steps!</div>
      )}
    </Container>
  );
};

ProgressIndicator.propTypes = {
  progressSteps: PropTypes.array,
  completefill: PropTypes.string,
  incompleteFill: PropTypes.string,
  currentStep: PropTypes.number,
  cancelled: PropTypes.bool,
};

export default ProgressIndicator;
