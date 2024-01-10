from openai import OpenAI
import os
from request import request

client = OpenAI(
    api_key=os.getenv("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")
)

# Declare the Assistant's ID

assistant_id = "asst_0gCnV9wFE8ZYuUYmOLg7Li1i"

# Fetch the assistant

assistant = client.beta.assistants.retrieve(
    assistant_id=assistant_id
)
assistant

# Create a thread

thread = client.beta.threads.create()
thread

# Prompt the model to tell us all about the data provided

run = client.beta.threads.runs.create(
    thread_id=thread.id,
    assistant_id=assistant.id,
    instructions="What is the name of the second album?"
)
run

# Show the latest message!

messages = client.beta.threads.messages.list(
    thread_id=thread.id
)
messages.data[0].content[0]