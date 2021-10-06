import './lila.scss';
interface ILilaProps {
  direction: 'up' | 'down' | 'left' | 'right';
}

export default function Lila(props: ILilaProps) {
  return (
    <div className="lila">
      <div className="sprite" style={{ backgroundImage: `url('graphics/sprites/lila-${props.direction}.gif')` }}></div>
    </div>
  );
}
