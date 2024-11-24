import StarViolewt from '../../../../../../../../public/assets/icons/violet_star.svg';
import StarEmpty from '../../../../../../../../public/assets/icons/empty_star.svg';

function StarsRow({ stars }: { stars: number }) {
  return (
    <ul className="mt-12 flex justify-between">
      {[...Array(stars)].map((_, index) => (
        <li key={index}>{index % 2 === 0 ? <StarEmpty /> : <StarViolewt />}</li>
      ))}
    </ul>
  );
}

export default StarsRow;
