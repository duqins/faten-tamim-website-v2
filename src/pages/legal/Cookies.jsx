import { useLanguage } from '../../context/LanguageContext'
import LegalPage from '../../components/LegalPage'

export default function Cookies() {
  const { isAr } = useLanguage()

  const content = isAr ? {
    title: 'سياسة ملفات تعريف الارتباط',
    updated: 'آخر تحديث: مارس 2025',
    sections: [
      { heading: '1. ما هي ملفات تعريف الارتباط؟', text: 'ملفات تعريف الارتباط (Cookies) ملفات نصية صغيرة تُخزَّن على جهازك عند زيارتك لموقعنا الإلكتروني. تساعد هذه الملفات على تحسين تجربة تصفحك، وتذكّر تفضيلاتك، وتمكيننا من تحليل كيفية استخدام الزوار لموقعنا.' },
      { heading: '2. أنواع ملفات تعريف الارتباط التي نستخدمها', text: 'نستخدم أنواعًا مختلفة من ملفات تعريف الارتباط: ملفات ضرورية للوظائف الأساسية للموقع ولا يمكن إيقاف تشغيلها؛ وملفات تفضيلات لتذكر إعداداتك كتفضيل اللغة (العربية/الإنجليزية)؛ وملفات تحليلية مجهولة الهوية لمساعدتنا على فهم كيفية تفاعل الزوار مع موقعنا وتحسينه؛ وملفات وظيفية لتوفير ميزات معزَّزة مثل بيانات نماذج الاتصال المحفوظة.' },
      { heading: '3. ملفات تعريف الارتباط الخاصة بالأطراف الثالثة', text: 'قد يضع بعض مزودو الخدمة الخارجيين ملفات تعريف الارتباط على جهازك، بما في ذلك: خدمة خرائط Google المضمّنة في صفحة الاتصال لدينا؛ وأدوات تحليل الويب لقياس أداء الموقع. لا يتحكم مكتبنا في ملفات تعريف الارتباط هذه ونشجعك على مراجعة سياسات الخصوصية للأطراف الثالثة ذات الصلة.' },
      { heading: '4. إدارة ملفات تعريف الارتباط', text: 'يمكنك التحكم في ملفات تعريف الارتباط وإدارتها من خلال إعدادات متصفحك. يمكنك عادةً حذفها أو منع وضعها. غير أن تعطيل بعض ملفات تعريف الارتباط قد يؤثر في وظائف موقعنا وتجربتك التصفحية.' },
      { heading: '5. مدة الاحتفاظ بملفات تعريف الارتباط', text: 'تختلف مدة الاحتفاظ بملفات تعريف الارتباط: ملفات الجلسة تُحذف عند إغلاقك للمتصفح؛ وملفات تعريف الارتباط الدائمة تبقى لمدة محددة (عادةً حتى 12 شهرًا) أو حتى تحذفها يدويًا.' },
      { heading: '6. التغييرات على هذه السياسة', text: 'قد نحدّث سياسة ملفات تعريف الارتباط هذه بصفة دورية. نشجعك على مراجعة هذه الصفحة بانتظام للاطلاع على أي تغييرات. استمرارك في استخدام موقعنا بعد نشر التغييرات يُعدّ قبولًا للسياسة المحدّثة.' },
      { heading: '7. اتصل بنا', text: 'إذا كان لديك أي أسئلة حول سياسة ملفات تعريف الارتباط هذه، يُرجى التواصل معنا على: f.alsulebi@gmail.com أو الاتصال على: 971 52 545 1974' },
    ],
  } : {
    title: 'Cookie Policy',
    updated: 'Last updated: March 2025',
    sections: [
      { heading: '1. What Are Cookies?', text: 'Cookies are small text files stored on your device when you visit our website. They help improve your browsing experience, remember your preferences, and allow us to analyze how visitors use our site.' },
      { heading: '2. Types of Cookies We Use', text: 'We use several types of cookies: Essential cookies that are necessary for core website functionality and cannot be disabled; Preference cookies that remember your settings such as language preference (Arabic/English); Anonymized analytics cookies that help us understand how visitors interact with our site so we can improve it; and Functional cookies that provide enhanced features such as saved contact form data.' },
      { heading: '3. Third-Party Cookies', text: 'Some third-party service providers may set cookies on your device, including: Google Maps embedded on our contact page; and web analytics tools for measuring site performance. Our firm does not control these cookies and we encourage you to review the privacy policies of the relevant third parties.' },
      { heading: '4. Managing Cookies', text: 'You can control and manage cookies through your browser settings. You can generally delete them or prevent them from being set. However, disabling certain cookies may affect the functionality of our website and your browsing experience.' },
      { heading: '5. Cookie Retention', text: 'Cookie retention periods vary: Session cookies are deleted when you close your browser; Persistent cookies remain for a defined period (typically up to 12 months) or until you manually delete them.' },
      { heading: '6. Changes to This Policy', text: 'We may update this Cookie Policy periodically. We encourage you to review this page regularly for any changes. Your continued use of our website after changes are posted constitutes acceptance of the updated policy.' },
      { heading: '7. Contact Us', text: 'If you have any questions about this Cookie Policy, please contact us at: f.alsulebi@gmail.com or call: 971 52 545 1974' },
    ],
  }

  return <LegalPage content={content} />
}
