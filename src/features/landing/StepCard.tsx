export const StepCard = (props: {
  stepNumber: number;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex gap-4 items-start md:block">
    {/* Mobile number circle (hidden on desktop where timeline handles it) */}
    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 text-sm font-bold text-white md:hidden">
      {props.stepNumber}
    </div>

    <div className="flex-1 rounded-xl border border-border bg-card p-6">
      <div className="text-lg font-bold">{props.title}</div>
      <div className="my-3 w-8 border-t border-purple-400" />
      <div className="text-muted-foreground leading-relaxed">{props.children}</div>
    </div>
  </div>
);
