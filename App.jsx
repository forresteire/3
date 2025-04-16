
import { useState } from 'react'

export default function ConsentAgreementApp() {
  const [form, setForm] = useState({
    partner1: '',
    partner2: '',
    consent: {
      kiss: false,
      touch: false,
      oral: false,
      intercourse: false,
      toys: false,
      recording: false,
    },
    notes: '',
    signed: false,
  })

  const toggleConsent = (key) => {
    setForm({
      ...form,
      consent: { ...form.consent, [key]: !form.consent[key] }
    })
  }

  const handleSubmit = () => {
    setForm({ ...form, signed: true })
  }

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>情侣性同意协议</h2>

      <input
        placeholder='甲方姓名/昵称'
        value={form.partner1}
        onChange={e => setForm({ ...form, partner1: e.target.value })}
        style={{ width: '100%', marginBottom: 8 }}
      />
      <input
        placeholder='乙方姓名/昵称'
        value={form.partner2}
        onChange={e => setForm({ ...form, partner2: e.target.value })}
        style={{ width: '100%', marginBottom: 16 }}
      />

      <p><strong>同意的行为：</strong></p>
      {Object.entries({
        kiss: '亲吻',
        touch: '抚摸（含衣内）',
        oral: '口交/手淫',
        intercourse: '插入性行为',
        toys: '使用道具/玩具',
        recording: '拍摄视频/录音'
      }).map(([key, label]) => (
        <label key={key} style={{ display: 'block', margin: '4px 0' }}>
          <input
            type='checkbox'
            checked={form.consent[key]}
            onChange={() => toggleConsent(key)}
          />
          {' '}{label}
        </label>
      ))}

      <textarea
        placeholder='备注 / 限制 / 约定...'
        value={form.notes}
        onChange={e => setForm({ ...form, notes: e.target.value })}
        rows={4}
        style={{ width: '100%', marginTop: 12 }}
      />

      {!form.signed ? (
        <button onClick={handleSubmit} style={{ marginTop: 16, width: '100%' }}>
          ✅ 双方确认签署
        </button>
      ) : (
        <div style={{ marginTop: 16, color: 'green' }}>
          ✅ 协议已签署！请彼此尊重与爱护 ❤️
        </div>
      )}
    </div>
  )
}
