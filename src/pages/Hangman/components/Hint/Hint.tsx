import Button from "../../../../components/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Hint.css";

SwiperCore.use([Keyboard, Mousewheel, Pagination]);

type HintProps = {
  definitions: {
    definition: string;
    examples: string[];
  }[];
  currentItems: string[] | null;
  setItems: (item: string | null) => void;
};

const Hint: React.FC<HintProps> = ({ definitions, currentItems, setItems }) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      direction="vertical"
      mousewheel={true}
      keyboard={true}
    >
      {definitions.map((definition, index) => (
        <SwiperSlide key={index}>
          <div className="hint">
            <div className="hint__definition">
              <p className="hint__label">Definition:</p>
              {currentItems?.includes(`definition-${index}`) ? (
                <p className="hint__text">{definition.definition}</p>
              ) : (
                <Button
                  type="show"
                  handleClick={() => setItems(`definition-${index}`)}
                />
              )}
            </div>
            <div className="hint__example">
              <p className="hint__label">Examples:</p>
              {currentItems?.includes(`examples-${index}`) ? (
                <div>
                  {definition.examples.map((example, index) => (
                    <p className="hint__text" key={index}>
                      {`${index + 1}) ${example}`}
                    </p>
                  ))}
                </div>
              ) : (
                <Button
                  type="show"
                  handleClick={() => setItems(`examples-${index}`)}
                />
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hint;
