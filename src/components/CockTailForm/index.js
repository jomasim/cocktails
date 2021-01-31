import { Form, Input, Button, Select, Checkbox, Upload } from 'antd'
import { TagInput } from 'reactjs-tag-input'
import { UploadOutlined } from '@ant-design/icons'
import './form.css'
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 8
  }
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
}

const { Option } = Select

const CockTailForm = () => {
  const [form] = Form.useForm()

  const onFinish = values => {
    console.log('Success:', values)
  }
  const onTagsChanged = ingredients => {
    form.setFieldsValue({ ingredients })
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <p style={{ fontSize: '30px', color: '#c3aa8a', textAlign: 'center' }}>
        Custom Cocktails form
      </p>

      <Form
        {...layout}
        name='basic'
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name='name' label='Name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='category' label='Category'>
          <Select>
            <Option value='Ordinary drink'>Ordinary drink</Option>
          </Select>
        </Form.Item>
        <Form.Item name='glass' label='Glass' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='alcoholic' label='Alcoholic' valuePropName='checked'>
          <Checkbox />
        </Form.Item>
        <Form.Item name='instructions' label='Instructions'>
          <Input.TextArea />
        </Form.Item>
        <Form.Item name='thumbnail' label='Image'>
          <Upload
            action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
            listType='picture'
            defaultFileList={[]}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item name='ingredients' label='Ingredients'>
          <TagInput tags={[]} onTagsChanged={onTagsChanged} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type='primary'
            htmlType='submit'
            style={{ background: ' #d22747', borderColor: ' #d22747' }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CockTailForm
