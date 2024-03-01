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
  showDefinition: boolean;
  showExamples: boolean;
  onClickDefinition: () => void;
  onClickExamples: () => void;
};

const Hint: React.FC<HintProps> = ({
  definitions,
  showDefinition,
  showExamples,
  onClickDefinition,
  onClickExamples,
}) => {
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
              {showDefinition ? (
                <p className="hint__text">{definition.definition}</p>
              ) : (
                <Button type="show" handleClick={onClickDefinition} />
              )}
            </div>
            <div className="hint__example">
              <p className="hint__label">Examples:</p>
              {showExamples ? (
                <div>
                  {definition.examples.map((example, index) => (
                    <p className="hint__text" key={index}>
                      {`${index + 1}) ${example}`}
                    </p>
                  ))}
                </div>
              ) : (
                <Button type="show" handleClick={onClickExamples} />
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hint;
