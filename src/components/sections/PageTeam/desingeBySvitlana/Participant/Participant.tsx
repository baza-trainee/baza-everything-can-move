import Container from '@/components/ui/DesignBySvitlna/Container';
import { data } from './data';
import { Card } from './Card';

function Participant() {
  return (
    <section className="py-[156px]">
      <Container>
        <ul className="flex gap-10">
          {data.map((item, index) => (
            <Card key={index} value={item.value} text={item.text} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Participant;
