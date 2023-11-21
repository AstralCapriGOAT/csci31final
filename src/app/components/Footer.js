import { createClient } from '@supabase/supabase-js'

export default function Footer() {
  return (
    <div className="text-center bg-gray-400 text-white py-6 position:fixed">
      <p>Copyright © {new Date().getFullYear()}</p>
    </div> // insert top of page? more navigation? social links??
  )
}
