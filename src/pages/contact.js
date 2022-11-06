import React, { useState } from "react";
import { Layout, Content, Form, Message } from "components";

const Contact = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    };

    return (
        <Layout>
            <Content>
                <h1>Contact us</h1>
                <div>
                    <Form
                        onSubmit={handleSubmit}
                        action="https://formspree.io/f/xzbkwqyk"
                        method="POST"
                    >
                        <label>
                            <span>
                                Your email<span>*</span>
                            </span>
                            <input required type="text" name="email" />
                        </label>
                        <label>
                            <span>
                                Your message<span>*</span>
                            </span>
                            <textarea required name="message"></textarea>
                        </label>
                        {status === "SUCCESS" && (
                            <Message color="success">
                                Thanks for your message! We'll be in touch soon!
                            </Message>
                        )}
                        {status === "ERROR" && (
                            <Message>Oops! An error occurred</Message>
                        )}
                        <button type="submit">Send</button>
                    </Form>
                </div>
            </Content>
        </Layout>
    );
};

export default Contact;
