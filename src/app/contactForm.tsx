export default function ContactForm() {
  return (
    <div>
      <form className="flex flex-col">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div id="formStatus"></div>
    </div>
  )
}
