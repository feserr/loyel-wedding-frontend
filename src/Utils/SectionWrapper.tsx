import { FC, ReactNode } from "react";

const SectionWrapper: FC<{ children: ReactNode, className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default SectionWrapper;
