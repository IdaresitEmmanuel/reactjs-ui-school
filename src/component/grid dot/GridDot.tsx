import styles from "./GridDot.module.css";
interface GridDotProps {
  size: number;
  className: string;
}
export default function GridDot({ size, className }: GridDotProps) {
  return (
    <>
      <div
        className={`${styles.container} ${className}`}
        style={{ maxHeight: size + "px", maxWidth: size + "px" }}
      >
        {Array.from({ length: 100 }, (_, index) => (
          <div key={index} className={styles.item} />
        ))}
      </div>
    </>
  );
}
