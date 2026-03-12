export const Logo = (props: {
  isTextHidden?: boolean;
}) => (
  <div className="flex items-center text-2xl font-bold tracking-tighter">
    {/* VLO in Primary Color, Stats in Default Text Color */}
    <span className="text-primary">VLO</span>
    {!props.isTextHidden && <span>Stats</span>}
  </div>
);
