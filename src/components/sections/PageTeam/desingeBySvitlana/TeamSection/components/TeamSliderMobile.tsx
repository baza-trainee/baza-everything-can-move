import { teamsFoto } from '../ui/dataFoto';
import CardTeam from './Card';

export default function TeamSliderMobile() {
  return (
    <div className="relative h-[320px] w-full overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[320px] w-[830px] -translate-x-1/2 -translate-y-1/2">
        {teamsFoto.map((item, index) => (
          <li key={index}>
            <div className="flex items-center justify-center">
              <CardTeam
                urlFoto={item.urlFoto}
                name={item.name}
                role={item.role}
              />
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
