interface IAnimatorProps {
  imageUrl: string;
  x?: number;
  y?: number;
  frameWidth: number;
  frameHeight: number;
  iterations?: number;
}
export default function Animator(props: IAnimatorProps) {
  return (
    <div className="animator">
      <div className="sprite" style={{ backgroundImage: `url('')` }}></div>
    </div>
  );
}
