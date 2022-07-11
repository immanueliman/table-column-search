import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [display, setDisplay] = useState("")

  function displays(){
    setFilteredData(data)
  }

  // function render(){
  //   if(filteredData.length === 0){
  //     setFilteredData(data)
  //   }
  // }
  // render();

  const handleTitle = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === " ") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleLanguage = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.language.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === " ") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const handleAuther = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.author.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === " ") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const handleCountry = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.country.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === " ") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  useEffect(() => {
    displays();
  },[]);

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  

  return (
    <div className="search">
     
      <table>
      <tbody>
        <tr> 
        <th>Book Name 
        <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          
          onChange={handleTitle}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
            
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      </div>
        </th>
        <th>Author
        <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter author Name"
          
          onChange={handleAuther}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
            
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      </div>
        </th>
        <th>Country
        <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter Country Name"
          
          onChange={handleCountry}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
            
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      </div>
        </th>
        <th>Language
        <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter Language"
        
          onChange={handleLanguage}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
            
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      </div>
        </th>
        
        </tr>

        
      {/* {filteredData.length === 0 && 
      
          data.map((value, key) => {
           return (
              <tr  key={key}>
                <td>{value.title} </td>
                <td>{value.author} </td>
                <td>{value.country} </td>
                <td>{value.language} </td>
                
              </tr>
           );
            
          })}
           */}
     
      {
         filteredData.map((value, key) => {
          return (
             <tr  key={key}>
               <td>{value.title} </td>
               <td>{value.author} </td>
               <td>{value.country} </td>
               <td>{value.language} </td>
               
             </tr>
          );
           
         })}
      </tbody>
    </table>

    </div>
    
  );
}

export default SearchBar;
