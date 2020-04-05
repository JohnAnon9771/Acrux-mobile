import React, { useState } from 'react';
import {
  State,
  LongPressGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { onGestureEvent, spring } from 'react-native-redash';
import PropTypes from 'prop-types';

import Icon from '@expo/vector-icons/FontAwesome5';

import { Title, Importance, Content, Card, Matter, Date } from './styles';

export default function GestureCard({ item }) {
  const { Value, useCode, set } = Animated;
  const [open, setOpen] = useState(false);
  const progress = new Value(100);
  const state = new Value(State.ACTIVE);
  const gestureHandler = onGestureEvent({ state });

  function toggle() {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    console.tron.log(open);
  }
  useCode(
    () =>
      set(
        progress,
        spring({
          from: progress,
          to: 0,
          config: { damping: 6 },
        })
      ),
    []
  );

  return (
    <LongPressGestureHandler
      minDurationMs={1000}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
          Alert.alert("I'm being pressed for so long");
        }
      }}
    >
      <TapGestureHandler
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent === State.BEGAN) {
            setOpen(true);
          } else {
            setOpen(false);
          }
        }}
        numberOfTaps={1}
      >
        <Card style={{ top: progress }}>
          <Importance />
          <Matter>
            <Title>{item.title}</Title>
            <Content>{item.content}</Content>
          </Matter>
          <Date>{item.date}</Date>
          <Icon
            name={!open ? 'chevron-up' : 'chevron-down'}
            size={14}
            color="#0f1020"
          />
        </Card>
      </TapGestureHandler>
    </LongPressGestureHandler>
  );
}

GestureCard.propTypes = {
  item: PropTypes.object.isRequired,
};
