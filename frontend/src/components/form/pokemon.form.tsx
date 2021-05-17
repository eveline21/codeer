import { FC } from "react";
import "./pokemon.form.scss";
import { Form, Input, InputNumber, Select, Tag, Modal } from "antd";
import { Pokemon } from "../../models/pokemon.model";

interface newPokemon {
  name: string;
  type: string[];
  HP: number;
  Attack: number;
  Defense: number;
  'Sp. Attack': number;
  'Sp. Defense': number;
  'Speed': number;
}

interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: newPokemon) => void;
  onCancel: () => void;
}

const options = [{value: "Normal"}, {value: "Fire"}, {value: "Water"}, {value: "Electric"}, {value: "Grass"}, 
  {value: "Ice"}, {value: "Fighting"}, {value: "Poison"}, {value: "Ground"}, {value: "Flying"}, {value: "Psychic"},
  {value: "Bug"}, {value: "Rock"}, {value: "Ghost"}, {value: "Dragon"}, {value: "Steel"}, {value: "Fairy"}]

export const PokemonForm: FC<CollectionCreateFormProps> = ({visible, onCreate, onCancel}) => {
  const [form] = Form.useForm();

  function tagRender(props: { label: any; value: any; closable: any; onClose: any; }) {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: { preventDefault: () => void; stopPropagation: () => void; }) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={Pokemon.getColorType(value)}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  }

  return (
    <Modal
      visible={visible}
      title="Create a new pokemon"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed: ', info)
          })
      }}
    >
      <Form
        form={form}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Pokemon name is required' }]}
        >
          <Input placeholder="Pikachu"/>
        </Form.Item>
        <Form.Item label="Type" name="type"
          rules={[{ required: true, message: 'Pokemon type is required' }]}
        >
          <Select mode="multiple"
            placeholder="Electric"
            showArrow
            tagRender={tagRender}
            style={{ width: '100%' }}
            options={options}
          />
        </Form.Item>
        <Form.Item label="HP" name="HP"
          rules={[{ required: true, message: 'HP is required' }]}
        >
          <InputNumber placeholder="35" min={0}/>
        </Form.Item>
        <Form.Item label="Attack" name="Attack"
          rules={[{ required: true, message: 'Attack is required' }]}
        >
          <InputNumber placeholder="55" min={0}/>
        </Form.Item>
        <Form.Item label="Defense" name="Defense"
          rules={[{ required: true, message: 'Defense is required' }]} 
        >
          <InputNumber placeholder="30" min={0}/>
        </Form.Item>
        <Form.Item label="Sp. Attack" name="Sp. Attack"
          rules={[{ required: true, message: 'Sp. Attack is required' }]}
        >
          <InputNumber placeholder="50"  min={0}/>
        </Form.Item>
        <Form.Item label="Sp. Defense" name="Sp. Defense"
          rules={[{ required: true, message: 'Sp. Defense is required' }]}
        >
          <InputNumber placeholder="40" min={0}/>
        </Form.Item>
        <Form.Item label="Speed" name="Speed"
          rules={[{ required: true, message: 'Speed is required' }]}
        >
          <InputNumber placeholder="90" min={0}/>
        </Form.Item>
      </Form>
    </Modal>
  );
};
