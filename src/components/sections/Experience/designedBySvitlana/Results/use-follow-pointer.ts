import { RefObject, useEffect } from "react";
import { useMotionValue, useSpring, frame } from "framer-motion";

const spring = { damping: 3, stiffness: 12, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLElement>, parentElem:HTMLElement) {

  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;
    //   console.log('clientX:', clientX, 'clientY:', clientY );

      frame.read(() => {
        console.log('clientX:', clientX, 'clientY:', clientY);
        console.log('xPoint:  element.offsetLeft:', element.offsetLeft, 'element.offsetWidth:', element.offsetWidth);
        console.log('yPoint:  element.offsetTop:', element.offsetTop, 'element.offsetHeight:', element.offsetHeight);

        xPoint.set(clientX / 4);
        yPoint.set(clientY / 4);
        // console.log(x);
        // console.log(element.offsetLeft, element.offsetWidth );
        // console.log(element.offsetTop, element.offsetHeight );
        // console.log(element.offsetTop, element.offsetHeight );
        // console.log('AfterxPoint:', xPoint, 'AfteryPoint:', yPoint );
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);

  }, []);

  return { x, y };
}