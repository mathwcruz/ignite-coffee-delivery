import { SpinnerContainer, Spinner } from "./styles";

interface LoadingSpinnerProps {
  color: string;
}

export function LoadingSpinner({ color }: LoadingSpinnerProps) {
  return (
    <SpinnerContainer>
      <Spinner color={color} />
    </SpinnerContainer>
  );
}
