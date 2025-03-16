from fastapi import HTTPException, status, responses

class NotFoundException(HTTPException):
    def __init__(self, detail: str):
        super().__init__(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=detail
        )

def http_exception_handler(request, exc):
    return responses.JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail},
    )