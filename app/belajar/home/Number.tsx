"use client";

import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

function AnimatedCounter() {
  const [durability, setDurability] = useState(0);
  const [dayaSerang, setDayaSerang] = useState(0);
  const [efekCC, setEfekCC] = useState(0);
  const [tingkatKesulitan, setTingkatKesulitan] = useState(0);

  // Menggunakan useSpring untuk menganimasikan nilai durability
  const durabilityProps = useSpring({
    from: { number: 0 },
    to: { number: durability },
    config: { mass: 1, tension: 20, friction: 10 },
  });

  // Menggunakan useSpring untuk menganimasikan nilai dayaSerang
  const dayaSerangProps = useSpring({
    from: { number: 0 },
    to: { number: dayaSerang },
    config: { mass: 1, tension: 20, friction: 10 },
  });

  // Menggunakan useSpring untuk menganimasikan nilai efekCC
  const efekCCProps = useSpring({
    from: { number: 0 },
    to: { number: efekCC },
    config: { mass: 1, tension: 20, friction: 10 },
  });

  // Menggunakan useSpring untuk menganimasikan nilai tingkatKesulitan
  const tingkatKesulitanProps = useSpring({
    from: { number: 0 },
    to: { number: tingkatKesulitan },
    config: { mass: 1, tension: 20, friction: 10 },
  });

  useEffect(() => {
    setDurability(78);
    setDayaSerang(44);
    setEfekCC(39);
    setTingkatKesulitan(28);
  }, []);

  return (
    <div>
      <h1>Animated Counter</h1>
      <animated.h2>
        {durabilityProps.number.to((val) => Math.floor(val))}
      </animated.h2>
      <animated.h2>
        {dayaSerangProps.number.to((val) => Math.floor(val))}
      </animated.h2>
      <animated.h2>
        {efekCCProps.number.to((val) => Math.floor(val))}
      </animated.h2>
      <animated.h2>
        {tingkatKesulitanProps.number.to((val) => Math.floor(val))}
      </animated.h2>
    </div>
  );
}

export default AnimatedCounter;
