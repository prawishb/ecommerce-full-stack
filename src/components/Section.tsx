import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  className?: string;
  children: ReactNode;
};

const Section = ({ title, className = "", children }: Props) => {
  return (
    <section className={cn("", className)}>
      <div className="max-w-6xl mx-auto px-4">
        {title && <h3 className="text-3xl font-semibold mb-8">{title}</h3>}
        {children}
      </div>
    </section>
  );
};

export default Section;
