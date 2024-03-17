import { Component, For } from 'solid-js';

export const defaultAlergens = [
  {
    number: 1,
    title: 'obiloviny obsahující lepek',
    description: 'pšenice, žito, ječmen, oves, špalda, kamut nebo jejich hybridní odrůdy a výrobky z nich',
  },
  {
    number: 2,
    title: 'korýši',
    description: 'a výrobky z nich',
  },
  {
    number: 3,
    title: 'vejce',
    description: 'a výrobky z nich',
  },
  {
    number: 4,
    title: 'ryby',
    description: 'a výrobky z nich',
  },
  {
    number: 5,
    title: 'podzemnice olejná (arašídy)',
    description: 'a výrobky z nich',
  },
  {
    number: 6,
    title: 'sójové boby (sója)',
    description: 'a výrobky z nich',
  },
  {
    number: 7,
    title: 'mléko',
    description: 'a výrobky z nich',
  },
  {
    number: 8,
    title: 'skořápkové plody',
    description:
      'mandle, lískové ořechy, vlašské ořechy, kešu ořechy, pekanové ořechy, para ořechy, pistácie, makadamie a výrobky z nich',
  },
  {
    number: 9,
    title: 'celer',
    description: 'a výrobky z nich',
  },
  {
    number: 10,
    title: 'hořčice',
    description: 'a výrobky z nich',
  },
  {
    number: 11,
    title: 'sezamová semena (sezam)',
    description: 'a výrobky z nich',
  },
  {
    number: 12,
    title: 'oxid siřičitý a siřičitany',
    description: 'v koncentracích vyšších 10 mg, ml/kg, l, vyjádřeno SO 2',
  },
  {
    number: 13,
    title: 'vlčí bob (lupina)',
    description: 'a výrobky z něj',
  },
] satisfies Props['alergens'];

type Props = {
  alergens: {
    number: number;
    title: string;
    description: string;
  }[];
};

export const AlergensBox: Component<Props> = (props) => {
  return (
    <div class="slide" id="alergens-list" style={{ display: 'block' }}>
      <div class="alergens-box">
        <h4>Seznam alergenů</h4>

        <For each={props.alergens}>
          {({ number, title, description }) => (
            <div class="alergen-content">
              <h1>{number}</h1>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
