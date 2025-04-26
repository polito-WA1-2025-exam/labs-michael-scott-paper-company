# Group "Micheal Scott Paper Company"
Members: s346320 RAGAGLIA LUCA.  
Exercise chosen: Poke.  

## Database

### Table: bowls
| id | size | base | proteins | ingredients |
|----|------|------|----------|-------------|

### Table: bowlInfo
| size | price | quantityPerDay | remainingToday |
|------|-------|----------------|----------------|
| R    | 9     | 10             | 10             |
| M    | 11    | 8              | 8              |
| L    | 14    | 6              | 6              |

### Table: users
| id | 
|----|

### Table: orders
| id | textInput | paidPrice | numOfBowls |
|----|-----------|-----------|------------|

### Table: purchaseHistory
| userId | orderId | bowlId |
|--------|---------|--------|

## APIs

### POST /bowls  
**Description:** add a new bowl  
**Request:**
```json
{
    "size": "R", 
    "base": "rice",
    "proteins": ["tuna"],
    "ingredients": ["avocado", "avocado", "ananas", "avocado", "kale", "kale"]
}
```
**Responses:**
```json
{   
    "message": "Bowl <id> added succesfully!"
}
```
```json
{   
    "error": "<err.message>" 
}
```

### GET /bowls/:id
**Description:** get a bowl given its id  
**Request:** `:id`  
**Responses:**
```json
{ 
    "message": "Bowl <id> retrieved successfully!", 
    "bowl": "<row>" 
}
```
```json
{   
    "message": "Bowl <id> doesn't exist!" 
}
```
```json
{   
    "error": "<err.message>" 
}
```

### DELETE /bowls/:id
**Description:** delete a bowl given its id  
**Request:** `:id`  
**Responses:**
```json
{ 
    "message": "Bowl <id> deleted successfully!", 
}
```
```json
{   
    "message": "Bowl <id> doesn't exist!" 
}
```
```json
{   
    "error": "<err.message>" 
}
```