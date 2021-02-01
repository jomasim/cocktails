import { Form, Input, Button, Select, Checkbox, Upload } from 'antd'
import { TagInput } from 'reactjs-tag-input'
import { UploadOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import './form.css'
import { postCockTail, uploadImage } from '../../redux/actions'

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
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
  const formRef = useRef()
  const [fileList, setFileList] = useState([])
  const dispatch = useDispatch()

  const { data: imageData, loading: loadingImage } = useSelector(
    state => state.uploadImage
  )

  const { loading: postCockTailStatus } = useSelector(
    state => state.postCockTail
  )

  useEffect(() => {
    if (imageData) {
      setFileList([imageData])
      form.setFieldsValue({ strDrinkThumb: imageData.url })
    }
  }, [imageData, form])

  const handleImageUpload = async () => {
    const { file, fileList } = form.getFieldValue('strDrinkThumb')
    if (fileList.length) {
      const image = file.originFileObj
      dispatch(uploadImage(image))
    }
  }

  const onTagsChanged = ingredients => {
    form.setFieldsValue({ ingredients })
  }

  const onFinish = values => {
    dispatch(postCockTail(values))
    form.resetFields()
  }

  const onSubmit = () => {
    formRef.current.submit()
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
        ref={formRef}
      >
        <Form.Item name='strDrink' label='Name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='strCategory' label='Category'>
          <Select>
            <Option value='Ordinary drink'>Ordinary drink</Option>
            <Option value='Shot'>Shot</Option>
            <Option value='Punch / Party Drink'>Punch / Party Drink</Option>
          </Select>
        </Form.Item>
        <Form.Item name='strGlass' label='Glass' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='alcoholic' label='Alcoholic' valuePropName='checked'>
          <Checkbox />
        </Form.Item>
        <Form.Item name='strInstructions' label='Instructions'>
          <Input.TextArea />
        </Form.Item>
        <Form.Item name='strDrinkThumb' label='Image'>
          <Upload fileList={fileList} customRequest={handleImageUpload}>
            <Button icon={<UploadOutlined />} loading={loadingImage}>
              Upload
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item name='ingredients' label='Ingredients'>
          <TagInput
            placeholder='Enter ingredients'
            tags={[]}
            onTagsChanged={onTagsChanged}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type='primary'
            style={{ background: ' #d22747', borderColor: ' #d22747' }}
            loading={postCockTailStatus}
            onClick={() => onSubmit()}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CockTailForm
