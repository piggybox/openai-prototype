from fastapi import FastAPI, HTTPException
from ai import generate_branding_snippet, generate_branding_keywords
from mangum import Mangum

app = FastAPI()
handler = Mangum(app)


@app.get("/snippet")
async def generate_snippet(prompt: str):
    validate_input(prompt)
    snippet = generate_branding_snippet(prompt)
    return {"snippet": snippet, "keywords": []}


@app.get("/keywords")
async def generate_keywords(prompt: str):
    validate_input(prompt)
    keywords = list(generate_branding_keywords(prompt))
    return {"snippet": None, "keywords": keywords}


@app.get("/snippet_and_keywords")
async def generate_keywords(prompt: str):
    validate_input(prompt)
    snippet = generate_branding_snippet(prompt)
    keywords = list(generate_branding_keywords(prompt))
    return {"snippet": snippet, "keywords": keywords}

MAX_INPUT_LENGTH = 32


def validate_input(prompt: str):
    if len(prompt) >= MAX_INPUT_LENGTH:
        raise HTTPException(status_code=400, detail="Input length is too long")
