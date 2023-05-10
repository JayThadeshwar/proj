import './App.css';
import App from './App.js';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function JD() {
    const navigate = useNavigate();
    const navToUIUX_JD = () => {
        navigate('/uiux_jd');
    };
    return (
    <div className="JD">
        <App></App>
              
        <div class="banner-section spad">
            <div class="container-fluid">
                <div class="col-lg-12">
                        <div class="section-title">
                            <h2>Business Analyst</h2>
                        </div>
                </div>
                <div class="row p-2">
                    <div class="col-lg-6">                          
                    <Card sx={{ display: 'flex'}}>
                            <CardMedia component="img" style={{border:'2px solid',borderColor:'gray'}} 
                                sx={{ width: 150 }}
                                image="assets/img/mesa.png"
                                alt="" />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4">
                                        MESA Solutions
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{paddingTop:'5px'}}>
                                        Technical Business Analyst
                                    </Typography>                                  
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1,gap:4, justifyContent:'space-between' }}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <FaMapMarkerAlt /> Banglore
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Full Time
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                    &#8377;35,000
                                    </Typography>
                                    <Button size="small" variant='outlined' onClick={navToUIUX_JD} color="primary">Apply Now</Button>
                                </Box>
                            </Box>
                        </Card>                   
                    </div>

                    <div class="col-lg-6">
                    <Card sx={{ display: 'flex'}}>
                            <CardMedia component="img" style={{border:'2px solid',borderColor:'gray'}} 
                                sx={{ width: 150 }}
                                image="https://i0.wp.com/hrnxt.com/wp-content/uploads/2021/08/Hiration.jpg"
                                alt="" />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4">
                                        Hiration
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{paddingTop:'5px'}}>
                                        Junior Business Analyst
                                    </Typography>                                  
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1,gap:4, justifyContent:'space-between' }}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <FaMapMarkerAlt /> Mumbai
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Full Time
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                    &#8377;25,000
                                    </Typography>
                                    <Button size="small" variant='outlined' onClick={navToUIUX_JD} color="primary">Apply Now</Button>
                                </Box>
                            </Box>
                        </Card>
                    </div>            
                </div>     

                <div class="row p-2">
                    <div class="col-lg-6">                          
                    <Card sx={{ display: 'flex'}}>
                            <CardMedia component="img" style={{border:'2px solid',borderColor:'gray'}} 
                                sx={{ width: 150 }}
                                image="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMHN1epX3xHN1epX3xAM4MHN1epX3xHN1epX3xAM4MHN1epX3xHN1epX3xAM4MHN1epX3xHN1epX3xAM4MHN1epX3xHN1epX3xAM4MHN1epX3xHN1epX3xAM4MHN1epX3xHN1epX3xAM4MHN1epX3xHN1epX3xAM4MHN1epX3xPnN1epX3xAJAI/N1epX3xHN1epX3xAJAI/N1epX3xHN1epX3xAJAI/N1epX3xHN1epX3xAJAI/N1epX3xHN1epX3xAJAI/N1epX3xHN1epX3xAJAI/N1epX3xHN1epX3xAJAI/OVerX3xHOVerX3xAJAI/OVerX3xHN1epX3xAJAI/N1epX3xHN1epX3xAJAI/N1epX3xHOVerX3xAJAI/OVerX3xHOVerX3xAJAI/OVerX3xHOVerX3xAJAI/OVerX3xHOVerX3xAJAI/OVerX3xHOVerX3xAJAI/OVerX3xHOVerX3xAJAI/OVerX3xHOVerX3xAP/2Q=="
                                alt="" />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4">
                                        Trustech AV
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{paddingTop:'5px'}}>
                                        Senior Business Analyst
                                    </Typography>                                  
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1,gap:4, justifyContent:'space-between' }}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <FaMapMarkerAlt /> Pune
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Full Time
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                    &#8377;65,000
                                    </Typography>
                                    <Button size="small" variant='outlined' onClick={navToUIUX_JD} color="primary">Apply Now</Button>
                                </Box>
                            </Box>
                        </Card>
                    </div>

                    <div class="col-lg-6">
                    <Card sx={{ display: 'flex'}}>
                            <CardMedia component="img" style={{border:'2px solid',borderColor:'gray'}} 
                                sx={{ width: 150 }}
                                image="data:image/png;base64,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"
                                alt="" />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4">
                                        IT Solutions
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{paddingTop:'5px'}}>
                                        SAP Business Analyst
                                    </Typography>                                  
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1,gap:4, justifyContent:'space-between' }}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <FaMapMarkerAlt /> Mumbai
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Full Time
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                    &#8377;45,000
                                    </Typography>
                                    <Button size="small" variant='outlined' onClick={navToUIUX_JD} color="primary">Apply Now</Button>
                                </Box>
                            </Box>
                        </Card>
                    </div>            
                </div> 

                <div class="row p-2">
                    <div class="col-lg-6">                          
                    <Card sx={{ display: 'flex'}}>
                            <CardMedia component="img" style={{border:'2px solid',borderColor:'gray'}} 
                                sx={{ width: 150 }}
                                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAACE1BMVEX+/v7////5+fn4+Pj19fVaLnvy8vIrKinw8PAeQJfuQDXn5+fX19fb29vKLpPt7e3g4eEBesMCsK9+Y5bMzMz9uBNQKG5GAG1UKnNEIF6NxT7v7PIdQZ3ExcU8G1U5GVC3uLhTIHb9sgDk4OgsAERUI3cAAAAALJAAbr67rsefjq+1o8hHImNpQYeEwSgAQZcINpNLEHBuSIsxFEYAABRXOXZjOYP9rgCRc6efhbN8cYY0AFgzFUgoDjrFAId4VJMANJ4nMlUlJCPtLh+rlLvHwc4sKSAAJ40tAE7RyNkYADmun7ysra0AABwhCTENACJ3c3vkmMOMd6Dt9eOYfK3ZeLO0MZT/wQAoL0iPm8SewuIAZryAZ5fQ3un+4KuvqLV0YYZWO2xFKlxPOWKilq04DlMGAC9ENFMjAD2LgpS6yNOXvN4vHz2fmqOApslnoNFgWGdVSWFXlsmLep49M0Y4isnOSJz45fDOYKRTM3NJbau4SmPyV07pY2HWh5H90X79yF/9vTf+7Mv6JADrr9DW8fEml6WnVZnvyN/iyJrvUEduyMipsdAADYeYgGBCSYPPnS9niqWsjVna7sbC36Gt39/CnFM9Tpklp62gzmQAFTaryNJXVlUYFQ392pv+5+TowsDbnZrM6bX/9t30gX6q03dnZmbJfqDYYYTN1sMkNmxAWKJgxMMAAIT9wUix1IjYtrgVY7AwAAAT/klEQVR4nO3d/UMTZ54A8DyTF6MhJjXgoCNCGGIJGLZBDMEoaSVpCVHBgOdqQUSBCypVFhXoradS2bNq7/auej13varnuld3vbZ/4j3f55n3mQQ1MwESvj8oSSbJ83zmeZtnnpnYGjw0fHK4SbiEcAhhx8FslIDEigkXM0KzpcinkPMaW61byrc603a7Ite2jRkKEclEIUIpvLYGedfr9/sGJ1AjqMuFXCiwgbtIMdjoBIYI2oLgpXWhYgneBYEaVDDB6ghuYlDRBKsiaA0qkaAIgmygKwaV0Csqw6CHVA4ZsIGrsmsCRPHaoDKoVIJVagM1qHSC4gjEQN8YVBqBEYJYG1wKA317uNbpNjUKtYvUoPJrAkThdlEyqHSCIggagwomKNwkiAb6YrDWKbYgChQEbOAwLAZrnV5LwrggCAZVUBMgjGsDNaiKmgBhWBv8CoPKJzCuDcSgSmoChEFtcBgbrHVKLYwCBtVEYNQkqA0qvSZAKGqD1qBaioFBQRANqodAj6A0qIaaAKGtDdjAXmXFQFcQFAZVQ6BEkA2qqxhoC4JsUEUEmoJADNaoGCB1lPOrlQXBLhmUlwAVinIlQFEQiEF5i0HB7JcVQlEQwIApI8E7AJSJQYFQToN3BigHg96gDATvKWC5gozgt9WUxeADBCxW0BpYTfCBAtYqSAjlMChBwEoF0YAhBpYSlChgoYKAYLmBCQKWKegNLPkakwisRKAG1hUD0wisQRBy7rHQwEQBaxS0BuZ/g8kE1iFYZ2A6gQUIagPTP94CAqsQsIHNCgNLCMxHsNLAIgLTEZQGJn+0ZQSWIFhiYCGB2QiygbmfaymBBQgWGEhpdXAc57BAxNTUWmIAieTDuaQzykJEncn5cIZZtwg48yYb4ARy4UCQDYZCTiHq60PRRDSQ5dcngmhg1ufhxGUCbFTKPiXAsXPnzkRiYpJblwhmGiDkyDrVAJRgJ4n9+xOJ85mKNkCIyQaDTm1IBvshpvonxtcbAjUwIxAKh7QCuE0QawIl2L9r167+C+YomJJqGuYYIMR3RqWsB6PQHUSSyUCyMxZkE4lEaKdIsGvX3pYL6Qo0QKiNpdmPstHkfDbDK1o/hs+E5ycSiSlqsBdHy0UT2oXSky2GGQaIdwZJ/p3z4UI9oC0zOdGfEAwa9w6cL72PMCH3NEo3QCjLhoJsKJdeLVvc+ET/FDFobGyZnnGsI4PSPgzZ8Iggoh0BOTzeGq/f42ZsMHErj5f5Qy39QNDYeDg/MLtOEEo1QHyQAigOlXw1TceaGmprqIHDBdeW28UXucmWFiDAMXCgtC5inRigTBsvpEZIGOOvbWjCIRs43D6Px+/3iVvYsQIQHDhwYPofS+oi1oeBjZFSQlPlqamtbWhQGtihIGAEb41HVHDM5PNAcOBAfnCuBAUT8g9RcnsgBs0cZFU28MGRM4PLATHA4RJTz80M5DHBkSNH8sevN60xgpkGNodPaXDp0qWzZ89ePmuXDPx+qShghekBMDhyZOD4ldkP7ClNSbmZBjaVQe1XrTSuMkoDj9Q4QlmYzgPCiRODXdeaXEXyujEMcFPHaAw+oqEx8CmGBbbxua7BE9gAFLrmZmvfuziYkXSzDBByOTQGVwWDrxQGHp/P5bIrM8GNXxvc1zUIcbxr3759V64NDQ3Npt+1UJiQdPMMfG6VwbGm2t+pDPzYwH/26leXz551MWh+abRNnlHh07Mz1+au47g2NDvbVGMvlmsLEMwxQB6fshw0NfgZJBi0XkYwTvL5/F7/V60ftbZ+OWZHkzuXloLh98jq+jdAHqVBQw0pyTckg4WbOLaf8vtJE9E6xqDwzoMHl9oqyQC5vbJBDQjAk3iXt0KesUHvdhyLfigH1CANBqNmGJiBYIIBYvCIUDTweoRkIY5zOejhkmDg814mBpfsNn7p4NLSUiUZkAZfMHBInyYlUjRAvktXcXz9T33bfn/r1q1/Lm02ieMzGc6uRfggr9IN8GGibMDIH4Ze3b59587dZYTug0HvIu4/8WbMN9tI9N1C9hU7WjA6+xIOkEgWnG3i55eiONhQIK3KGeKTgYKR5I1zikwoB7WSgYsQiAk9111XV9eMDRZOQtxDBMHRRw223UIrO3bs+MO/LJ68rx0aRZwxCGdOeOxQQ7lGWWcsAhFzRjuVOUM8q5vZloK1zAB5JAOGEjh4nh/D8W0zGDQ8yuADh0uPHj369ty5c8vLDoFg2wNisCPX29u7XbOX2U4arJD3h3i7h3ItCDnxa7FgNBSD/5VZQ3y0M1IoLDSolcsBfeLRd19AfPevp7HB6X/74mMSn3z3x2Yc3XbRYBuygcG/44rSa1ft6DZnMtnZmUwmxSHEE9hQ3MQeiuGX2dHx9HgyihEiQbkCYr6YFBFgjMiPLTNAvgadwSdbIT79jzpisGcrjU//CI+bhx8IBH0Mgqz9AQwWvu94PCwZBHH2nfBPZ1JhsCK8msNCSZY2qJNk06zCQFH/QwAZKkN7gIuBaCA+AwZ79uz59D9P1929e/eHPSRkg9+LBl5i8F9gcH+4o6Pj6fc0k5koTm8kG8PJZjmdAccmk4HYvAByEIpLBNHDVpuqX4ANMZZy5rZAFkqdS2MaJAMkG+z5bMvRo13H//Sn6emjn0Ns2SMZ3BINmtDKysqfR6HPOIk6du/e3dHxCxSGXGc8nhzlo/FAPJYlaScNxxOaj7ATbMQp3EmQCtoRGHZ8r+4iqAG3avZKNvCIBm7xrCU1+PzZ7LFjz45uEQMMSHvw6lYfjW+OwS6iY4dTxAAr4KLAsPF43BlGwUA8HnDS/bfyBIdQFbBQnBWPK8NOvFHQgQ3Im9UGAVqSLDeokQykp4jBfx/DKfyryuDbH3HcHra5XM+fP3/x68smL96E6YVYRI9xKcAIJFsjIyN4R48mR+IjrO6cTS4JBmJv2hahUMRgWGMQp1tablArGkgDRMGgCQ8QVeXg4zFaTcPhdCbD+7z4neTxwv17J08xHBr+n6cdj/ETyUBPTzwGFj0jPcl5rUFbJyaKijTB+MhIMre2BkyDaGBXG+yDDKoNeDvHQOcPA7ycmxw83Lj6ann5FW4Enn/z4C8vng8z0JT19PQk24Q/RqJag0wIP90p0ORiPaTMoOGnr1+/1hqMQIGy3AC5JAP5uTNgcPTZX589kwS2XN+z9Tf/0Nt7ChvA+ekQNngEB1A3lrtxI4EN8OixDw+fEcp2plIpsp8DgVRPKqQdL9uCIxiBVoYc9kiF2qTzO6qk8WAIG9qK9AlmGPgkA7mPPiP0C0ePagyg7dMZwGDSRgy29b3EaY31pFI9pClMO7FGXHeEnY3hpwOduETUR/BfoVHj/MkGaPHmze33CueyVAN/IYPPt6jit7IBKxj8WWlAjiL6HEDU3t6eJF2inU21p1Ks7tRsfbw91R7J5dh4e/sI21ZgF+MvwkIpMIDed50ZhEKh4KiyHDTjYUYfOYrCTV4g3B4WeoNRnMn2CB0vc2NjnDBaxpnDz8cC7e0ppzOjHhythYFXNHBr60IhA240l8uNtvmgHNy4cWO57vTpbhuyQXvwAuch2h4O93QKzV8QewgPLn/Z+uVZsWuIQikfiUfYsJhvZE9DqA6fWCzVDgbQ+64XAxgHiK2Xx1v75n/xEfWpn376CR9eo2/wqAm/lnGGw+FO4VDJxmKQMO0Hz7Z+1EoN+EjQGSIRkfc9SpPuJq02wO8GgwWO45g1qAt6g48zCwukNbfZh4eH37x503BzOw1kY+y/vnj5Aop/TyYcToiHiLlAe0/cmVUZ0FU/ZAVgMCcbZGFBWJRTGQTxEWYZ+oX3MRjbIcTDxzC673gjGNy82goz7pBQBxvOZFIBsfXLkPWuMWIg1IUA6Vbq58kKsGhOMhgFlYh+OqUM44NCfeNvixk8eUyOkESDxatkthmyE07yGd4pDwnqSU7hsWNsbAz3EKOwu4MBBrcJEgJ8J0PKRduaGBQaI2kNPjMy2K4zSPakAs5oWIokKffyeDkLOQ+O0oZRRIDvzES1k2VlMzAcKxODz9VhZNAgGJz6nWgA/SZkUgphwaPYPrjoGkgbUiDMk2VAOdJAkKpfdgOjYyYw+Ntnn/1NGb/ZWsTgBrQHME2e1a/1lSoDEl+PiufoJlkRAblIFcGNJyM1gGU0MDh2PkPnkfaIE0hCKA3gCOe1ZDAmjn8iJMtBRZDdGxLHy8kQbfxFEoqAR4ptYAAzsH/fuvWHH7ZCR1hGA4M5lDOfbDUKhQEeKXF8bQPMovWSAymxG6AtmyICBEHMNikmQXnCTETgorQY2NDfwfxju86gWO9oxVza6gY2mwuPkRpOnTx57/79hefLyzRL86H6+vqQ6iCJS8Cib7H4R8kDxaRhloVngmRleD2SDBzUAJ6kBmjl4dsdO+zGObViTvWMlG2hOnxC4ruxtw9prODjIWzgJ9n4sbm5+xytxAlY4J4QTsG9WibPTpCF/xOCAdlAObU0mdgpRAI6BZUB/ThqAGcodlg0p2owt66c2z338507t28vK/fswqlTi4s37/nCeDCfwo3dbXouCkeaJpq8f7m7ufsO/BFOKPId2A8PVFNLIkJinOSVGHzh0hm8tdJAf45F+do5cqrpnGIE66MnHwUDnLU7eINXJDvnyVUeNIdwOHkb/mAS5NlJIcPwoF81rTI/RS4LmKCdwQ9wduf/OGpANqYGQPDWOgPtuTZjAyHFPsHgvg8O6lK4rbtLjp2h6vfD0n4hg/iNzeeEPJKrHsjfdrLJrn7FGetJ+tSuqfNknMDx+PiIJ9/N08+jbaK1BvpzropPJzMkzT/ixmqMhNvju6c0wK1Ud90dmtnxfljSvpdm7XZzXTetIZkWcsUDpRknD/a2nE9DX8rwk3vpm3D0X2RUc2qIp2+kBm8fPnmyYp1BoXPvxKBbNCBLFb/0iwYLHizQnsLJfSXu0YskJzP0wZ26Oz8KGWqE56cOCbs9TzI81dJ/8eLFvXki0DJHcjt10aH8csSTTfNy31gon2aUgwJrMOCVVz//fPduHRjQtUlgsP3m4uIi58tkeE45TcYPwIr+AaHRV5yDnYRl7o154ZnxPHkoR0vLOBon75264FZ8ufiBq4+R3nUNBtKE6jXDtTjy28gfdIEW3o4jw1n99RszAy04LuqeR/w0vDAtLvPnDg3kybJ3HPmW6cOz8FFp8uZ83qOcP6DvM8cAvtlRc2x2aO76lStXrs8NzdIrVuQNjNZkafSogcfz5pdfXj/dPaxfNHOIhNEFDTPklUnpMTd+6MLA9PT0wIG5mVqaDpSmbz+kWArkoc+4SjfA32FvmLneta/r+OAJIaYHB48cSsur9g3X5omvvXyB4/nzr7+GBsHD0cOlYYOsvlfYyPSYvCfkF7T471DKixpAATh2bd++Lin7OI7QxebTA4dq5CQYrNGk348eiKdYfx2rqfFTg93r695RRQzwNzRhgH1dOI4PDqoIjhw5cCA/fTEtpkK/VrfB63PB0jzpVPsLv9cvGphGYLEB8s+cuH5taGgWYmho7spgFywylwhwHB44PE7ToV+zDUNoj5tRGMC6de4XmEl8uq4IipUDj3bZHFc7fujK8cEB2QA3zaBAEOw6A7iWB/1FZeB582a45MagjAbab6Dfyo9fOzGdFwkO4577Qppe1WYzNuhTGehg157g/ddo4m92jc8RBULQ2Lg3L1y6a2jwUm1g7q1B1siAMvAzAwOHBYPGvVP583R859AbvHgAC9Fwv/BSeU3XhjcgDK7ZlrxAQAbwVEF/bZ/NZne4PR5vDW4iNYWg5GphDsGHr1fGjeBsS4uEsGuqf54oGF7j6VNe4ylEJlfyHVLW2oAoTOIjGHIgRw7h+4VbfRS91pcG3xZMlnrNt1kEpa1bhytWB6ZEg137pxIHwzRnha75hmAy884oa8JVLCYalPJ2vEfP50UCiETifLrYNVl8NhCNhkLR9XQTiJLvf4Ar9kS/bEDuApTMZvRXKtr4dFuSZeG0STRpxl2CzAGwmXIfDHz4PtUvEJCJ3531QZZ1Btqy4QyNcLYtEGPZKD2VFmLXzRVtNEy6H8rkVEJpABEKBaNiKG6b5WQDptwqqvRUS2HWfXEYqiATGJ49xdUgZtJtokxItRhm3SMKOsr9idUMok5TqoGpBGbeKwynKz2RCAoGBgAhtjO8Du89bu494xCMfZYSQSODUDSYM+tmaZYYmHrvQJ72gHIjGII7J+Uy73MldzkJTDcQZqEz2VwyJNxDMhZoK3jnqLUnsMRAMaHLwb1Ezc296QQW3U91g95TdiMhmJvUzXtMqww2DILJ6dy857xssPnbA5u/QbH5WySbv0ljuYGpClYkT2Gw+RtVm79VtvmbdYLB5m8Xbv6G5eZvmW7+pu3mbxtv/sa1bLD5W+ebv3kvG5QZAWKNsg+hKAaCwRoUhDUORTFwOGSDakJQFgPRoNoKgqoYKA2qB0FdDMAA/lMUhMpHYNTFQGVQLQVBUwwkgypC0BLIBlVTG7Q1QWtQDQVBVwyIgauaEHQErgIGlYvAFDKoooKgJ3C5lAZVgKBvDCSDaqkNBjUBh5caVEltMCQAA5dsUOEIhjVBNqiG2mBcE3QGlYygJ9AaVDxCQQJi4NbVhkpsEhQEqprgVhpUdpNQqDEQDdyVXxsK1gS3200NKh6hGIHaoGIRCreHggH8Z9AkVBCCksCuIyAGPneF14aiNcGnNahIhOI1QTCobIRVCESDSkZYjcDn89oayP8Vi7A6ARj4RAN1u1gZCAYEivZQNKh1+4oUhA2OYNAr6ooBlAMPDZ8cbuWQQVUumI0S+v0u7Hm3Ip9Czmv+H4F5NBDQnQfmAAAAAElFTkSuQmCC"
                                alt="" />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h4">
                                        A&T
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{paddingTop:'5px'}}>
                                        Junior Business Analyst
                                    </Typography>                                  
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1,gap:4, justifyContent:'space-between' }}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <FaMapMarkerAlt /> Mumbai
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Full Time
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                    &#8377;30,000
                                    </Typography>
                                    <Button size="small" variant='outlined' onClick={navToUIUX_JD} color="primary">Apply Now</Button>
                                </Box>
                            </Box>
                        </Card>
                    </div>

       
                </div>           
            </div>
        </div>

      {/* FOOTER SECTION */}
        <footer class="footer-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="footer-left">
                            <div class="footer-logo">
                                <a href="#">Job Matchers</a>
                            </div>
                            <ul>
                                <li>Get explanations directly from the <br/>job recruiters for the selection or rejection of jobs.</li>
                            </ul>
                            <div class="footer-social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="footer-widget">
                            <h5>Contact Information</h5>
                            <div class="footer-left"><ul>
                                <li>Address: DJ Sanghvi College</li>
                                <li>Phone: +91 9000990009</li>
                                <li>Email: jobmatchers@gmail.com</li>
                            </ul></div>
                        </div>
                    </div>                    
                    <div class="col-lg-4">
                        <div class="newslatter-item">
                            <h5>Join Our Newsletter Now</h5>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <form action="#" class="subscribe-form">
                                <input type="text" placeholder="Enter Your Mail" />
                                <button type="button">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>            
        </footer>
       
     
      
    </div>
  );
}

export default JD;
