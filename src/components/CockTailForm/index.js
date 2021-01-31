import { Form, Input, Button, Select, Checkbox, Upload } from 'antd'
import { TagInput } from 'reactjs-tag-input'
import { UploadOutlined } from '@ant-design/icons'
import firebase from 'firebase'
import './form.css'

var firebaseConfig = {
  apiKey: 'AIzaSyBhiFoEQyMZppOZh5Tp08-BsHbc3em1T6k',
  authDomain: 'cocktails-df141.firebaseapp.com',
  databaseURL: 'https://cocktails-df141-default-rtdb.firebaseio.com',
  projectId: 'cocktails-df141',
  storageBucket: 'cocktails-df141.appspot.com',
  messagingSenderId: '462488278790',
  appId: '1:462488278790:web:ec953f8f481959f1f3b087',
  measurementId: 'G-040RSZHH77'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

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

    firebase
      .database()
      .ref('cocktails/')
      .set({ ...values })
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
        {/* <Form.Item name='thumbnail' label='Image'>
          <Upload
            action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
            listType='picture'
            defaultFileList={[]}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item> */}
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
