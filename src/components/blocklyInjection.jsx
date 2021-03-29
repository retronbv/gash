import React from 'react';

import BlocklyComponent, { Block, Category, Value, Field, Shadow, Sep, Mutation } from '../Blockly';

class BlocklyInjection extends React.Component {
    render() {
        return <BlocklyComponent ref={this.simpleWorkspace}
        readOnly={false} trashcan={false} media={'media/'}
        renderer={'zelos'} sounds={false}
        grid={{
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true
        }}
        zoom={{
          controls: true,
          startScale: 0.8,
          maxScale: 3,
          minScale: 0.1,
          scaleSpeed: 1.2,
          pinch: true
        }}
        move={{
          scrollbars: true,
          drag: true,
          wheel: true
        }}
        initialXml={`
          <xml xmlns="http://www.w3.org/1999/xhtml">
          </xml>
        `}
      >

<Category name="Test">
  <Block type="test_react_field" />
  <Block type="test_react_date_field" />
</Category>
<Category name="Motion" colour="#5b67a5">
  <Block type="motion_movesteps">
    <Value name="STEPS">
      <Shadow type="math_number">
        <Field name="NUM">10</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="motion_turnright">
    <Value name="DEGREES">
      <Shadow type="math_number">
        <Field name="NUM">15</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="motion_turnleft">
    <Value name="DEGREES">
      <Shadow type="math_number">
        <Field name="NUM">15</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="motion_goto">
    <Field name="NAME">__RANDOM__</Field>
  </Block>
  <Block type="motion_gotoxy">
    <Value name="X">
      <Shadow type="math_number">
        <Field name="NUM">0</Field>
      </Shadow>
    </Value>
    <Value name="Y">
      <Shadow type="math_number">
        <Field name="NUM">0</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="motion_glideto">
    <Field name="TO">__RANDOM__</Field>
    <Value name="SECS">
      <Shadow type="input_secs">
        <Field name="SECS">1</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="motion_glidesecstoxy">
    <Value name="SECS">
      <Shadow type="input_secs">
        <Field name="SECS">1</Field>
      </Shadow>
    </Value>
    <Value name="X">
      <Shadow type="math_number">
        <Field name="NUM">0</Field>
      </Shadow>
    </Value>
    <Value name="Y">
      <Shadow type="math_number">
        <Field name="NUM">0</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="motion_pointindirection">
    <Value name="DIRECTION">
      <Shadow type="input_direction">
        <Field name="DIRECTION">90</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="motion_pointtowards">
    <Field name="SPRITE">__MOUSE__</Field>
  </Block>
  <Block type="motion_changexby">
    <Value name="X">
      <Shadow type="math_number">
        <Field name="NUM">0</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="motion_setx">
    <Value name="X">
      <Shadow type="math_number">
        <Field name="NUM">0</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="motion_changeyby">
    <Value name="Y">
      <Shadow type="math_number">
        <Field name="NUM">0</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="motion_sety">
    <Value name="Y">
      <Shadow type="math_number">
        <Field name="NUM">0</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="motion_ifonedgebounce"></Block>
  <Block type="motion_setrotationstyle">
    <Field name="STYLE">LEFT_RIGHT</Field>
  </Block>
  <Block type="motion_xposition"></Block>
  <Block type="motion_yposition"></Block>
  <Block type="motion_direction"></Block>
</Category>
<Category name="Looks" colour="#745ba5">
  <Block type="looks_sayforsecs">
    <Value name="SPEECH">
      <Shadow type="text">
        <Field name="TEXT">Hello!</Field>
      </Shadow>
    </Value>
    <Value name="SECS">
      <Shadow type="input_secs">
        <Field name="SECS">2</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="looks_say">
    <Value name="SPEECH">
      <Shadow type="text">
        <Field name="TEXT">Hello</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="looks_thinkforsecs">
    <Value name="THOUGHT">
      <Shadow type="text">
        <Field name="TEXT">Hmm...</Field>
      </Shadow>
    </Value>
    <Value name="SECS">
      <Shadow type="math_number">
        <Field name="NUM">2</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="looks_think">
    <Value name="THOUGHT">
      <Shadow type="text">
        <Field name="TEXT">Hmm...</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="looks_switchcostumeto">
    <Value name="COSTUME">
      <Shadow type="looks_costumemenu">
        <Field name="COSTUME">1</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="looks_nextcostume"></Block>
  <Block type="looks_switchbackdropto">
    <Value name="BACKDROP">
      <Shadow type="looks_backdropmenu">
        <Field name="BACKDROP">1</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="looks_nextbackdrop"></Block>
  <Block type="looks_changesizeby">
    <Value name="SIZE">
      <Shadow type="math_number">
        <Field name="NUM">10</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="looks_setsize">
    <Value name="SIZE">
      <Shadow type="math_number">
        <Field name="NUM">100</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="looks_changeeffectby">
    <Field name="EFFECT">color</Field>
    <Value name="VALUE">
      <Shadow type="math_number">
        <Field name="NUM">25</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="looks_seteffectto">
    <Field name="EFFECT">color</Field>
    <Value name="VALUE">
      <Shadow type="math_number">
        <Field name="NUM">100</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="looks_cleargraphiceffects"></Block>
  <Block type="looks_show"></Block>
  <Block type="looks_hide"></Block>
  <Block type="looks_gotofrontback">
    <Field name="FRONTBACK">FRONT</Field>
  </Block>
  <Block type="looks_goforwardbackwardlayers">
    <Field name="FORWARDBACKWARD">FORWARD</Field>
    <Value name="LAYERS">
      <Shadow type="math_number">
        <Field name="NUM">1</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="looks_costumenumbername">
    <Field name="NUMBERNAME">NUMBER</Field>
  </Block>
  <Block type="looks_backdropnumbername">
    <Field name="NUMBERNAME">NUMBER</Field>
  </Block>
  <Block type="looks_size"></Block>
</Category>
<Category name="Sound" colour="#995ba5">
  <Block type="sound_playuntildone">
    <Value name="SOUND">
      <Shadow type="sound_soundmenu">
        <Field name="SOUND">Meow</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="sound_playsound">
    <Value name="SOUND">
      <Shadow type="sound_soundmenu">
        <Field name="SOUND">Meow</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="sound_stopallsounds"></Block>
  <Block type="sound_changeeffectby">
    <Field name="EFFECT">pitch</Field>
    <Value name="VALUE">
      <Shadow type="math_number">
        <Field name="NUM">10</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="sound_seteffectto">
    <Field name="EFFECT">pitch</Field>
    <Value name="VALUE">
      <Shadow type="math_number">
        <Field name="NUM">100</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="sound_clearsoundeffects"></Block>
  <Block type="sound_changevolumeby">
    <Value name="VOLUME">
      <Shadow type="math_number">
        <Field name="NUM">10</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="sound_setvolume">
    <Value name="VOLUME">
      <Shadow type="math_number">
        <Field name="NUM">100</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="sound_volume"></Block>
</Category>
<Category name="Events" colour="#a5745b">
  <Block type="events_whenflagclicked"></Block>
  <Block type="events_whenkeypressed">
    <Field name="KEY">space</Field>
  </Block>
  <Block type="events_whenspriteclicked"></Block>
  <Block type="events_whenbackdropswitchesto">
    <Field name="BACKDROP">1</Field>
  </Block>
  <Block type="events_whengreaterthan">
    <Field name="VALUE">LOUDNESS</Field>
    <Value name="VALUE">
      <Shadow type="math_number">
        <Field name="NUM">10</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="events_whenmessagereceived">
    <Field name="MESSAGE">message 1</Field>
  </Block>
  <Block type="events_broadcastmessage">
    <Value name="MESSAGE">
      <Shadow type="events_messagemenu">
        <Field name="MESSAGE">message 1</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="events_broadcastmessageandwait">
    <Value name="MESSAGE">
      <Shadow type="events_messagemenu">
        <Field name="MESSAGE">message 1</Field>
      </Shadow>
    </Value>
  </Block>
</Category>
<Category name="Control" colour="#9fa55b">
  <Block type="control_wait">
    <Value name="SECS">
      <Shadow type="math_number">
        <Field name="NUM">1</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="controls_repeat_ext">
    <Value name="TIMES">
      <Shadow type="math_number">
        <Field name="NUM">10</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="control_forever"></Block>
  <Block type="controls_if"></Block>
  <Block type="controls_if">
    <Mutation else="1"></Mutation>
  </Block>
  <Block type="control_waituntil"></Block>
  <Block type="control_repeatuntil"></Block>
  <Block type="control_stop">
    <Field name="STOP">ALL</Field>
  </Block>
  <Block type="control_whenistartasaclone"></Block>
  <Block type="control_createclone">
    <Field name="SPRITE">__MYSELF__</Field>
  </Block>
  <Block type="control_deletethisclone"></Block>
</Category>
<Category name="Sensing" colour="#5b80a5">
  <Block type="sensing_touching">
    <Value name="SPRITE">
      <Shadow type="sensing_touchingmenu">
        <Field name="SPRITE">__MOUSE__</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="sensing_touchingcolor">
    <Value name="COLOR">
      <Shadow type="input_color">
        <Field name="HUE">0</Field>
        <Field name="SATURATION">100</Field>
        <Field name="VALUE">100</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="sensing_coloristouchingcolor">
    <Value name="COLOR1">
      <Shadow type="input_color">
        <Field name="HUE">0</Field>
        <Field name="SATURATION">100</Field>
        <Field name="VALUE">100</Field>
      </Shadow>
    </Value>
    <Value name="COLOR2">
      <Shadow type="input_color">
        <Field name="HUE">50</Field>
        <Field name="SATURATION">100</Field>
        <Field name="VALUE">100</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="sensing_distanceto">
    <Value name="SPRITE">
      <Shadow type="sensing_distancetomenu">
        <Field name="SPRITE">__MOUSE__</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="sensing_askandwait">
    <Value name="QUESTION">
      <Shadow type="text">
        <Field name="TEXT">What's your name?</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="sensing_answer"></Block>
  <Block type="sensing_keypressed">
    <Value name="KEY">
      <Shadow type="sensing_keypressedmenu">
        <Field name="KEY">space</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="sensing_mousedown"></Block>
  <Block type="sensing_mousex"></Block>
  <Block type="sensing_mousey"></Block>
  <Block type="sensing_setdragmode">
    <Field name="DRAGGABLE">true</Field>
  </Block>
  <Block type="sensing_loudness"></Block>
  <Block type="sensing_timer"></Block>
  <Block type="sensing_resettimer"></Block>
  <Block type="sensing_of">
    <Field name="PROPERTY">x</Field>
    <Value name="SPRITE">
      <Shadow type="sensing_ofmenu">
        <Field name="SPRITE">__STAGE__</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="sensing_current">
    <Field name="UNIT">FullYear</Field>
  </Block>
  <Block type="sensing_dayssince2000"></Block>
  <Block type="sensing_username"></Block>
</Category>
<Category name="Operators" colour="#5ba55b">
  <Block type="math_arithmetic">
    <Field name="OP">ADD</Field>
    <Value name="A">
      <Shadow type="math_number">
        <Field name="NUM">0</Field>
      </Shadow>
    </Value>
    <Value name="B">
      <Shadow type="math_number">
        <Field name="NUM">0</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="operators_pickrandom">
    <Value name="NUM1">
      <Shadow type="math_number">
        <Field name="NUM">1</Field>
      </Shadow>
    </Value>
    <Value name="NUM2">
      <Shadow type="math_number">
        <Field name="NUM">10</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="logic_compare">
    <Field name="OP">EQ</Field>
  </Block>
  <Block type="logic_operation">
    <Field name="OP">AND</Field>
  </Block>
  <Block type="logic_negate"></Block>
  <Block type="operators_join">
    <Value name="INPUT1">
      <Shadow type="text">
        <Field name="TEXT">hello </Field>
      </Shadow>
    </Value>
    <Value name="INPUT2">
      <Shadow type="text">
        <Field name="TEXT">world!</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="operators_letterof">
    <Value name="INDEX">
      <Shadow type="math_number">
        <Field name="NUM">1</Field>
      </Shadow>
    </Value>
    <Value name="STRING">
      <Shadow type="text">
        <Field name="TEXT">world</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="text_length">
    <Value name="VALUE">
      <Shadow type="text">
        <Field name="TEXT">abc</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="operators_mod">
    <Value name="NUM1">
      <Shadow type="math_number">
        <Field name="NUM">0</Field>
      </Shadow>
    </Value>
    <Value name="NUM2">
      <Shadow type="math_number">
        <Field name="NUM">0</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="math_round">
    <Field name="OP">ROUND</Field>
    <Value name="NUM">
      <Shadow type="math_number">
        <Field name="NUM">3.1</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="math_single">
    <Field name="OP">ROOT</Field>
    <Value name="NUM">
      <Shadow type="math_number">
        <Field name="NUM">9</Field>
      </Shadow>
    </Value>
  </Block>
  <Block type="math_trig">
    <Field name="OP">SIN</Field>
    <Value name="NUM">
      <Shadow type="math_number">
        <Field name="NUM">45</Field>
      </Shadow>
    </Value>
  </Block>
</Category>
<Sep></Sep>
<Category name="Variables" colour="#a5745b" custom="VARIABLE"></Category>
<Category name="My Blocks" colour="#a55b80" custom="PROCEDURE"></Category>
<Sep></Sep>
<Category name="Pen" colour="#5ba55b"></Category>
</BlocklyComponent>
    }
}

export default BlocklyInjection